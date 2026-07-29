# 🔐 Blockchain-Based Certificate Verification System

A secure and decentralized web application for verifying academic certificates using **Blockchain, Ethereum, Solidity, IPFS, React, Node.js, and MySQL**.

This project eliminates certificate forgery by storing certificate hashes on the Ethereum blockchain while securely storing certificate files on IPFS. Organizations can verify the authenticity of uploaded certificates instantly without relying on manual verification.

---

## 📌 Problem Statement

Traditional certificate verification systems rely on centralized databases and manual verification, making them vulnerable to:

- Certificate forgery
- Fake educational documents
- Data tampering
- Single point of failure
- Time-consuming verification process

This project solves these challenges using Blockchain technology.

---

# 🚀 Features

- Secure Certificate Upload
- SHA-256 Hash Generation
- Digital Signature Verification
- IPFS Decentralized File Storage
- Ethereum Smart Contract Integration
- Tamper Detection
- Instant Certificate Verification
- Role-Based Authentication
- Audit Logging
- Secure File Management

---

# 🏗️ System Architecture

```
                     University
                          │
                  Upload Certificate
                          │
                          ▼
                Node.js Backend Server
                          │
        ┌─────────────────┴──────────────────┐
        │                                    │
        ▼                                    ▼
 SHA-256 Hash Generation              Digital Signature
        │                                    │
        └──────────────┬─────────────────────┘
                       ▼
               Upload PDF to IPFS
                       │
                 Receive CID Hash
                       │
                       ▼
          Ethereum Smart Contract
     (Stores Hash + CID + Timestamp)
                       │
                       ▼
                   MySQL Database
                       │
                       ▼
             Certificate Verification
```

---

# 🛠️ Tech Stack

## Frontend

- React.js
- HTML5
- CSS3
- JavaScript
- Bootstrap

## Backend

- Node.js
- Express.js

## Database

- MySQL

## Blockchain

- Ethereum
- Solidity
- Ganache
- MetaMask
- Web3.js

## Decentralized Storage

- IPFS

## Security

- SHA-256
- JWT Authentication
- Digital Signatures
- Role-Based Access Control (RBAC)

---

# 🔐 Security Features

- Password Authentication
- JWT-Based Authorization
- Role-Based Access Control
- SHA-256 Certificate Hashing
- Digital Signature Validation
- Blockchain Immutability
- Tamper Detection
- Secure API Endpoints

---

# 👥 User Roles

### Admin

- Manage Users
- View Verification Logs
- Monitor System

### University

- Upload Certificates
- Generate Certificate Hash
- Store Metadata

### Company / Recruiter

- Upload Certificate
- Verify Certificate Authenticity
- View Verification Status

---

# ⚙️ Project Workflow

1. University uploads certificate.
2. Backend generates SHA-256 hash.
3. Certificate is uploaded to IPFS.
4. IPFS returns a unique CID.
5. Hash and CID are stored on Ethereum using a Solidity Smart Contract.
6. Company uploads the certificate for verification.
7. Backend generates a new SHA-256 hash.
8. Blockchain hash is compared with the uploaded certificate hash.
9. If both hashes match, the certificate is verified.
10. Any mismatch indicates tampering.

---

# 📂 Project Structure

```
Blockchain-Certificate-Verification/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── uploads/
│   └── server.js
│
├── smart_contract/
│   ├── Certificate.sol
│   ├── migrations/
│   └── truffle-config.js
│
├── database/
│   └── schema.sql
│
├── README.md
└── LICENSE
```

---

# 📊 Key Functionalities

- Certificate Upload
- Certificate Verification
- Blockchain Storage
- IPFS Integration
- Hash Comparison
- Digital Signature Validation
- Verification Status Display
- Secure Login
- User Management

---

# 🎯 Future Enhancements

- Multi-University Support
- QR Code Verification
- Mobile Application
- Cloud Deployment
- AI-Based Fraud Detection
- Multi-Blockchain Support
- Real-Time Notifications

---

# 📸 Screenshots

- Login Page
- Dashboard
- Certificate Upload
- Blockchain Transaction
- Verification Page
- Verification Result

---

# 🧪 Testing

- Unit Testing
- Smart Contract Testing
- API Testing
- Integration Testing
- User Acceptance Testing

---

# 📈 Project Outcome

- Prevents certificate forgery
- Ensures secure verification
- Provides immutable certificate records
- Reduces verification time
- Improves trust between universities and organizations

---

# 👩‍💻 Developed By

**Your Name**

B.E. Computer Science Engineering

Anna University

---

# 📄 License

This project is developed for educational and learning purposes.
