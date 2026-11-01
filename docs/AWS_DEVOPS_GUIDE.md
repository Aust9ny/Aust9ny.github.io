# AWS & DevOps Deployment Architecture Guide

This guide breaks down how to deploy your **Portfolio Full-Stack App** to AWS, how to practice real-world DevOps skills, and whether you should consider alternatives.

---

## 1. Cloud Provider Comparison: Should You Use AWS?

| Cloud Provider | Best For | DevOps Skills You Practice | Monthly Cost | Complexity |
| :--- | :--- | :--- | :--- | :--- |
| **AWS (Amazon Web Services)** | **Practicing enterprise DevOps & leveling up your CV** | Docker, EC2, ECS Fargate, ECR, RDS, IAM, VPC, CloudWatch, Route 53, CI/CD | **$0 - $5/mo** (with Free Tier) | Medium-High |
| **Railway / Render / Fly.io** | Fast prototypes & solo indie hacking | Git push deployment (automated PaaS) | $5 - $10/mo | Very Low |
| **DigitalOcean / Hetzner VPS** | Simple Linux sysadmin & low budget | Linux server administration, Nginx, Docker | $4 - $6/mo | Low-Medium |

### Verdict:
- If your goal is **building real DevOps credentials that impress engineering managers and hiring teams**, **AWS is the #1 industry standard**.
- Because this project is containerized with **Docker**, your app is 100% cloud-agnostic: you can deploy it to AWS EC2 today, ECS Fargate tomorrow, or a VPS with zero code changes.

---

## 2. Architecture Overview

```
[ Visitor / Browser ]
         │
         ▼
[ Cloudflare / Route 53 (DNS + Free SSL) ]
         │
         ▼
[ AWS EC2 (t4g.micro / t3.micro) or AWS ECS Fargate ]
  ┌─────────────────────────────────────────────────────────┐
  │  Docker Compose Environment                             │
  │                                                         │
  │  ┌────────────────────────┐    ┌─────────────────────┐  │
  │  │  portfolio_app (Node)  │───▶│  Postgres 16 DB     │  │
  │  │  Port 3000             │    │  Port 5432          │  │
  │  │  - React 19 Frontend   │    │  (pg_data Volume)   │  │
  │  │  - Express REST API    │    └─────────────────────┘  │
  │  │  - Health Telemetry    │                             │
  │  └────────────────────────┘                             │
  └─────────────────────────────────────────────────────────┘
```

---

## 3. Database Strategies for AWS

1. **Option A: Containerized PostgreSQL on EC2 (Recommended for 100% Free Tier)**
   - Included in `docker-compose.yml`.
   - Runs PostgreSQL inside a Docker container with an EBS persistent volume.
   - **Cost:** **$0** (included in the EC2 instance).
   - **Best for:** Learning volume management, backups, and staying inside Free Tier.

2. **Option B: Amazon RDS PostgreSQL (db.t4g.micro)**
   - AWS-managed database with automated backups and failover.
   - **Cost:** Free for 12 months under AWS Free Tier (750 hours/month of `db.t3.micro` or `db.t4g.micro`). After 12 months, ~$15–$25/month.
   - **Best for:** Learning AWS RDS, VPC Subnet Groups, and Security Group ingress rules.

3. **Option C: Free Serverless PostgreSQL (Neon / Supabase)**
   - Managed serverless PostgreSQL with generous perpetual free tiers.
   - Just paste the connection string into `DATABASE_URL` in your `.env`.

---

## 4. Step-by-Step Deployment: AWS EC2 + Docker

### Step 1: Launch an EC2 Instance
1. Log in to the [AWS Management Console](https://aws.amazon.com/console/).
2. Navigate to **EC2** → **Launch Instance**.
3. Configure:
   - **Name:** `portfolio-server`
   - **AMI:** Ubuntu Server 24.04 LTS (HVM) or Amazon Linux 2023
   - **Instance Type:** `t4g.micro` (ARM) or `t3.micro` (Free Tier eligible)
   - **Key Pair:** Create a new key pair (`.pem`) to SSH into your server.
   - **Security Group Rules:**
     - Allow **SSH (Port 22)** from your IP
     - Allow **HTTP (Port 80)** from Anywhere (`0.0.0.0/0`)
     - Allow **HTTPS (Port 443)** from Anywhere (`0.0.0.0/0`)
     - Allow **Port 3000** (for your portfolio app)

### Step 2: Connect & Install Docker on EC2
```bash
# SSH into your EC2 instance
ssh -i your-key.pem ubuntu@<your-ec2-public-ip>

# Update packages & install Docker + Docker Compose
sudo apt-get update && sudo apt-get install -y docker.io docker-compose-v2 git

# Add ubuntu user to docker group
sudo usermod -aG docker ubuntu
newgrp docker
```

### Step 3: Clone & Run via Docker Compose
```bash
# Clone your portfolio repository
git clone https://github.com/sippakorn-ka/your-portfolio.git
cd your-portfolio

# Start the application and database
docker compose up -d --build

# Verify running containers and health checks
docker compose ps
docker compose logs -f portfolio
```

### Step 4: Verify Deployment
Visit:
```
http://<your-ec2-public-ip>:3000
http://<your-ec2-public-ip>:3000/api/health
```

---

## 5. Free SSL & Custom Domain Setup

To point your custom domain (e.g. `sippakorn.dev`) to your AWS server with free automatic SSL:
1. Use **Cloudflare DNS** (Free):
   - Add an `A` record pointing `sippakorn.dev` to your EC2 Public IP.
   - Enable Cloudflare **Proxy status** (Orange Cloud).
   - In Cloudflare SSL/TLS settings, set encryption mode to **Full**.
   - Cloudflare automatically manages HTTPS/SSL at the edge with zero server certificate hassle!

---

## 6. Keeping AWS Costs at $0 (Billing Protections)

- Set up an **AWS Budget** with an alert at **$1.00**.
- Always terminate test resources (like Elastic Load Balancers or large RDS instances) when not in use.
- Use `t4g.micro` or `t3.micro` EC2 instances to stay inside the 750 hours/month Free Tier.
