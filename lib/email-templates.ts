export function getConsultationEmailTemplate(
  name: string,
  email: string,
  services: string,
  message: string,
) {
  const formattedServices = services
    ? services
        .split(", ")
        .map((s) => `• ${s}`)
        .join("\n")
    : "None selected";

  const formattedMessage = message
    ? message.replace(/\n/g, "<br>")
    : "<em>No additional message provided.</em>";

  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const currentTime = new Date().toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    timeZoneName: "short",
  });

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Consultation Request - Satax Advisors</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          line-height: 1.6;
          color: #1f2937;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          margin: 0;
          padding: 20px;
        }
        
        .container {
          max-width: 600px;
          margin: 0 auto;
          background: #ffffff;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0,0,0,0.3);
        }
        
        .header {
          background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
          padding: 40px 30px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        
        .header::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%);
          transform: rotate(45deg);
        }
        
        .header h1 {
          color: #ffffff;
          font-size: 28px;
          font-weight: 700;
          margin: 0 0 10px 0;
          letter-spacing: -0.5px;
          position: relative;
          z-index: 1;
        }
        
        .header p {
          color: rgba(255,255,255,0.9);
          font-size: 14px;
          margin: 0;
          position: relative;
          z-index: 1;
        }
        
        .badge {
          display: inline-block;
          background: rgba(255,255,255,0.2);
          backdrop-filter: blur(10px);
          padding: 5px 15px;
          border-radius: 20px;
          font-size: 12px;
          margin-top: 15px;
          position: relative;
          z-index: 1;
        }
        
        .content {
          padding: 40px;
        }
        
        .greeting {
          font-size: 18px;
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 20px;
          padding-bottom: 15px;
          border-bottom: 2px solid #e5e7eb;
        }
        
        .info-grid {
          background: #f9fafb;
          border-radius: 16px;
          padding: 25px;
          margin: 25px 0;
        }
        
        .info-row {
          display: flex;
          align-items: flex-start;
          margin-bottom: 20px;
          padding-bottom: 20px;
          border-bottom: 1px solid #e5e7eb;
        }
        
        .info-row:last-child {
          margin-bottom: 0;
          padding-bottom: 0;
          border-bottom: none;
        }
        
        .info-icon {
          width: 40px;
          height: 40px;
          background: #eff6ff;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 15px;
          flex-shrink: 0;
        }
        
        .info-icon span {
          font-size: 20px;
        }
        
        .info-content {
          flex: 1;
        }
        
        .info-label {
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-weight: 600;
          color: #6b7280;
          margin-bottom: 5px;
        }
        
        .info-value {
          font-size: 16px;
          font-weight: 500;
          color: #1f2937;
          line-height: 1.4;
        }
        
        .services-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .services-list li {
          padding: 8px 0;
          color: #1f2937;
          display: flex;
          align-items: center;
        }
        
        .services-list li::before {
          content: "✓";
          color: #10b981;
          font-weight: bold;
          margin-right: 10px;
        }
        
        .message-box {
          background: #fef3c7;
          border-left: 4px solid #f59e0b;
          border-radius: 12px;
          padding: 20px;
          margin: 25px 0;
        }
        
        .message-box p {
          margin: 0 0 10px 0;
          color: #78350f;
          font-weight: 500;
        }
        
        .message-content {
          color: #451a03;
          line-height: 1.6;
        }
        
        .action-buttons {
          margin: 30px 0;
          text-align: center;
        }
        
        .button {
          display: inline-block;
          background: #1e3a8a;
          color: white;
          padding: 12px 30px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          margin: 0 5px;
          transition: transform 0.2s;
        }
        
        .button:hover {
          transform: translateY(-2px);
        }
        
        .button-secondary {
          background: #6b7280;
        }
        
        .timestamp {
          background: #f3f4f6;
          border-radius: 12px;
          padding: 15px;
          margin: 25px 0;
          text-align: center;
        }
        
        .timestamp p {
          margin: 5px 0;
          font-size: 13px;
          color: #6b7280;
        }
        
        .footer {
          background: #1f2937;
          padding: 30px;
          text-align: center;
          border-top: 1px solid #374151;
        }
        
        .footer p {
          color: #9ca3af;
          font-size: 12px;
          margin: 5px 0;
        }
        
        .footer a {
          color: #60a5fa;
          text-decoration: none;
        }
        
        .priority-badge {
          background: #ef4444;
          color: white;
          padding: 3px 10px;
          border-radius: 12px;
          font-size: 11px;
          font-weight: 600;
          display: inline-block;
          margin-left: 10px;
          vertical-align: middle;
        }
        
        @media only screen and (max-width: 600px) {
          .content {
            padding: 25px;
          }
          
          .info-row {
            flex-direction: column;
          }
          
          .info-icon {
            margin-bottom: 10px;
          }
          
          .button {
            display: block;
            margin: 10px 0;
          }
        }
      </style>
    </head>
    <body>
      <div class="container">
        <!-- Header Section -->
        <div class="header">
          <h1>New Consultation Request</h1>
          <p>Urgent follow-up required</p>
          <div class="badge">
            ⚡ Priority: High
          </div>
        </div>
        
        <!-- Content Section -->
        <div class="content">
          <div class="greeting">
            👋 Hello Satax Team,
          </div>
          
          <p style="margin-bottom: 20px; color: #4b5563;">
            A potential client has just submitted a consultation request through your website. 
            Please review the details below and follow up within <strong>24 hours</strong> for best conversion.
          </p>
          
          <!-- Client Information Grid -->
          <div class="info-grid">
            <div class="info-row">
              <div class="info-icon">
                <span>👤</span>
              </div>
              <div class="info-content">
                <div class="info-label">Full Name</div>
                <div class="info-value">${name}</div>
              </div>
            </div>
            
            <div class="info-row">
              <div class="info-icon">
                <span>📧</span>
              </div>
              <div class="info-content">
                <div class="info-label">Email Address</div>
                <div class="info-value">
                  <a href="mailto:${email}" style="color: #3b82f6; text-decoration: none;">${email}</a>
                </div>
              </div>
            </div>
            
            <div class="info-row">
              <div class="info-icon">
                <span>📅</span>
              </div>
              <div class="info-content">
                <div class="info-label">Submission Time</div>
                <div class="info-value">${currentDate} at ${currentTime}</div>
              </div>
            </div>
          </div>
          
          <!-- Services Section -->
          <div style="margin: 25px 0;">
            <h3 style="color: #1f2937; margin-bottom: 15px; display: flex; align-items: center;">
              📋 Services Requested
              <span class="priority-badge">${services ? services.split(",").length : 0} Service${services && services.split(",").length !== 1 ? "s" : ""}</span>
            </h3>
            <div style="background: #f0fdf4; border-radius: 12px; padding: 20px;">
              <ul class="services-list">
                ${
                  services
                    ? services
                        .split(", ")
                        .map((s) => `<li>${s.trim()}</li>`)
                        .join("")
                    : "<li>No specific services selected</li>"
                }
              </ul>
            </div>
          </div>
          
          <!-- Message Section -->
          <div class="message-box">
            <p>💬 Client's Message:</p>
            <div class="message-content">
              ${formattedMessage}
            </div>
          </div>
          
          <!-- Action Buttons -->
          <div class="action-buttons">
            <a href="mailto:${email}" class="button">✉️ Reply to Client</a>
            <a href="#" class="button button-secondary">📅 Schedule Meeting</a>
          </div>
          
          <!-- Quick Actions Note -->
          <div class="timestamp">
            <p>📌 <strong>Next Steps:</strong></p>
            <p>✓ Acknowledge receipt within 4 hours</p>
            <p>✓ Share relevant case studies or portfolio</p>
            <p>✓ Propose a 15-30 min discovery call</p>
            <p>✓ Follow up if no response in 48 hours</p>
          </div>
          
          <!-- Lead Quality Score (Mock) -->
          <div style="text-align: center; margin-top: 20px;">
            <span style="background: #e5e7eb; padding: 5px 12px; border-radius: 20px; font-size: 11px; color: #6b7280;">
              🎯 Lead Quality Score: ${services && message ? "High" : services || message ? "Medium" : "Low"}
            </span>
          </div>
        </div>
        
        <!-- Footer Section -->
        <div class="footer">
          <p>📧 This is an automated notification from your <strong>Satax Advisors</strong> website</p>
          <p>🕐 Response time expectation: Within 1 business day</p>
          <p>🔒 Client data is confidential - do not forward without consent</p>
          <p style="margin-top: 15px;">
            <a href="#">Manage Notifications</a> | 
            <a href="#">View in CRM</a> | 
            <a href="#">Report Issue</a>
          </p>
        </div>
      </div>
    </body>
    </html>
  `;
}
