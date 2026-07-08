# 🚀 Delta AI

> A scalable AI Workspace built with a Microservices Architecture, LangGraph, Gemini AI, AWS, Redis, and modern web technologies.

Delta AI is an intelligent AI platform that brings multiple AI capabilities into one workspace. Users can chat with AI, analyze PDFs, generate presentations, create images, and execute AI agents through a single interface.

---

# ✨ Features

- 🤖 AI Chat
- 📄 PDF Analysis & RAG
- 🎨 AI Image Generation
- 📊 AI PPT Generation
- 🧠 Multi-Agent Workflows (LangGraph)
- 📁 Document Intelligence
- 🔍 Semantic Search
- 🔐 Authentication & Authorization
- 📡 Real-time Communication
- 📈 Scalable Microservices Architecture

---

# 🏗️ System Architecture

```
                    +------------------+
                    |   React Frontend |
                    |     Port 3000    |
                    +--------+---------+
                             |
                             |
                             ▼
                  +----------------------+
                  |     API Gateway      |
                  |      Port 8080       |
                  +----------------------+
                   /      |       |      \
                  /       |       |       \
                 ▼        ▼       ▼        ▼

         Auth Service   Chat     Agent   User Service
           :5001        :5002     :5003      :5004

                 \        |       /
                  \       |      /
                   ▼      ▼     ▼

                  Shared Redis Cache
                         :6379

                          │
                          ▼

                Shared Database Layer

                          │
                          ▼

             External AI Providers
          • Gemini AI
          • Image Generation APIs
          • Embedding Models
```

---

# 📁 Project Structure

```
delta-ai/

frontend/

gateway/

services/
├── auth-service
├── user-service
├── chat-service
├── agent-service
├── pdf-service
├── image-service
├── ppt-service
├── notification-service

shared/
├── common
├── logger
├── config
├── middleware
├── utils

docker/

kubernetes/
```

---

# 🔄 Request Flow

### 1. User opens the React application.

↓

### 2. Every request is sent to the API Gateway.

The frontend never communicates directly with individual services.

↓

### 3. API Gateway validates

- Authentication
- JWT Token
- Rate Limiting
- Logging
- Routing

↓

### 4. Gateway forwards requests to the correct microservice.

Example:

```
POST /login
        ↓
Auth Service

POST /chat
        ↓
Chat Service

POST /generate-image
        ↓
Image Service

POST /generate-ppt
        ↓
PPT Service

POST /agent
        ↓
Agent Service
```

---

# 🤖 AI Services

## Chat Service

Responsible for

- AI Conversations
- Conversation History
- Context Management
- Streaming Responses

---

## PDF Service

Responsible for

- PDF Upload
- Text Extraction
- Embeddings
- Vector Search
- RAG Pipeline

---

## Image Service

Responsible for

- Image Generation
- Prompt Processing
- Image Storage

---

## PPT Service

Responsible for

- AI Presentation Creation
- Slide Generation
- Export to PowerPoint

---

## Agent Service

Built using LangGraph.

Responsible for

- Multi-Agent Orchestration
- Planning
- Tool Calling
- AI Workflows
- Autonomous Execution

---

# 🔴 Redis

Redis acts as the shared in-memory layer between services.

Used for:

- Session Storage
- Caching
- Rate Limiting
- Temporary Data
- Pub/Sub Messaging
- Shared Context
- Queue Management

Example:

```
Chat Service
        │
        ▼
     Redis
        ▲
        │
Agent Service
```

Instead of services calling each other for temporary information, they can read and write shared state through Redis, improving performance and reducing coupling.

---

# ☁️ AWS

Deployment includes:

- EC2
- S3
- CloudFront
- IAM
- Load Balancer
- CloudWatch
- ECR
- ECS / Kubernetes

---

# 🧠 LangGraph

LangGraph powers the autonomous AI agents.

It enables:

- Multi-step reasoning
- Tool execution
- Planning
- Memory
- State management
- Workflow orchestration

---

# 🛠 Tech Stack

## Frontend

- React
- TypeScript
- Tailwind CSS
- Vite

## Backend

- Node.js
- Express.js
- TypeScript

## AI

- LangGraph
- Gemini AI
- RAG
- Embeddings

## Infrastructure

- Redis
- Docker
- Kubernetes
- AWS

## Database

- PostgreSQL / MongoDB
- Vector Database (ChromaDB)

---

# 🚀 Scalability

Each microservice can be scaled independently.

Example:

```
3 Chat Service Instances

2 Agent Service Instances

5 Image Service Instances

1 Auth Service
```

The API Gateway distributes traffic to the appropriate service instances, allowing high throughput and fault isolation.

---

# 🔒 Security

- JWT Authentication
- Refresh Tokens
- API Gateway Validation
- Role-Based Access Control (RBAC)
- HTTPS
- Rate Limiting
- Input Validation

---

# 🎯 Vision

Delta AI aims to become a unified AI workspace where users can interact with multiple AI capabilities through a scalable, production-ready microservices architecture.