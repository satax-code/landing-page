export function getConsultationEmailTemplate(
  name: string,
  email: string,
  phone: string,
  services: string,
  message: string,
) {
  const formattedServices = services
    ? services
        .split(", ")
        .map((s) => `<li>${s.trim()}</li>`)
        .join("")
    : "<li>No specific services selected</li>";

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

  // Clean phone number for tel: link (remove spaces, dashes, parentheses)
  const cleanPhone = phone ? phone.replace(/[\s\-\(\)\+]/g, "") : "";

  // Generate calendar invitation link (Google Calendar)
  const calendarTitle = encodeURIComponent(`Consultation with ${name}`);
  const calendarDetails = encodeURIComponent(
    `Consultation request from ${name}\n\nServices interested in: ${services}\n\nMessage: ${message}`,
  );
  const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${calendarTitle}&details=${calendarDetails}&dates=${new Date().toISOString().replace(/-|:|\.\d+/g, "")}/${new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().replace(/-|:|\.\d+/g, "")}`;

  // Generate WhatsApp link
  const whatsappMessage = encodeURIComponent(
    `Hi ${name}, thank you for your consultation request with Satax Advisors. I'd like to discuss your requirements regarding: ${services}. When would be a good time to connect?`,
  );
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=${whatsappMessage}`;

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=yes">
      <title>New Consultation Request - Satax Advisors</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          -webkit-text-size-adjust: 100%;
          -ms-text-size-adjust: 100%;
        }
        
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          line-height: 1.6;
          color: #1f2937;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          margin: 0;
          padding: 16px;
        }
        
        .container {
          max-width: 600px;
          width: 100%;
          margin: 0 auto;
          background: #ffffff;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0,0,0,0.3);
        }
        
        .header {
          background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
          padding: 40px 24px;
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
          word-break: break-word;
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
          padding: 32px 24px;
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
          padding: 20px;
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
          width: 44px;
          height: 44px;
          background: #eff6ff;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 15px;
          flex-shrink: 0;
        }
        
        .info-icon span {
          font-size: 22px;
        }
        
        .info-content {
          flex: 1;
          min-width: 0;
        }
        
        .info-label {
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-weight: 600;
          color: #6b7280;
          margin-bottom: 6px;
        }
        
        .info-value {
          font-size: 16px;
          font-weight: 500;
          color: #1f2937;
          line-height: 1.4;
          word-break: break-word;
        }
        
        .info-value a {
          color: #3b82f6;
          text-decoration: none;
          display: inline-block;
          word-break: break-all;
        }
        
        .info-value a:active {
          color: #1e3a8a;
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
          flex-wrap: wrap;
        }
        
        .services-list li::before {
          content: "✓";
          color: #10b981;
          font-weight: bold;
          margin-right: 10px;
          flex-shrink: 0;
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
          word-break: break-word;
        }
        
        .action-buttons {
          margin: 30px 0;
          text-align: center;
        }
        
        .button {
          display: inline-block;
          background: #1e3a8a;
          color: white !important;
          padding: 14px 28px;
          border-radius: 10px;
          text-decoration: none;
          font-weight: 600;
          margin: 6px 4px;
          transition: all 0.2s ease;
          font-size: 15px;
          text-align: center;
          cursor: pointer;
          border: none;
        }
        
        .button:active {
          transform: scale(0.97);
          background: #152e6b;
        }
        
        .button-secondary {
          background: #10b981;
        }
        
        .button-secondary:active {
          background: #0e9f6e;
        }
        
        .button-outline {
          background: transparent;
          border: 2px solid #1e3a8a;
          color: #1e3a8a !important;
        }
        
        .button-outline:active {
          background: #eff6ff;
        }
        
        .timestamp {
          background: #f3f4f6;
          border-radius: 12px;
          padding: 16px;
          margin: 25px 0;
          text-align: center;
        }
        
        .timestamp p {
          margin: 6px 0;
          font-size: 13px;
          color: #6b7280;
        }
        
        .footer {
          background: #1f2937;
          padding: 24px;
          text-align: center;
          border-top: 1px solid #374151;
        }
        
        .footer p {
          color: #9ca3af;
          font-size: 12px;
          margin: 6px 0;
          line-height: 1.5;
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
        
        /* Mobile responsive styles */
        @media only screen and (max-width: 600px) {
          body {
            padding: 12px;
          }
          
          .content {
            padding: 24px 20px;
          }
          
          .header {
            padding: 32px 20px;
          }
          
          .header h1 {
            font-size: 24px;
          }
          
          .info-row {
            flex-direction: column;
          }
          
          .info-icon {
            margin-bottom: 12px;
            width: 40px;
            height: 40px;
          }
          
          .info-icon span {
            font-size: 20px;
          }
          
          .button {
            display: block;
            width: 100%;
            margin: 8px 0;
            padding: 14px 20px;
          }
          
          .info-grid {
            padding: 16px;
          }
          
          .greeting {
            font-size: 17px;
          }
        }
        
        /* Small phone styles */
        @media only screen and (max-width: 380px) {
          .content {
            padding: 20px 16px;
          }
          
          .header h1 {
            font-size: 22px;
          }
          
          .badge {
            font-size: 10px;
          }
        }
        
        /* Ensure buttons are tappable */
        .button, .info-value a {
          -webkit-tap-highlight-color: transparent;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <!-- Header Section -->
        <div class="header">
          <h1>✨ New Consultation Request</h1>
          <p>Immediate follow-up recommended</p>
          <div class="badge">
            ⚡ Priority: High
          </div>
        </div>
        
        <!-- Content Section -->
        <div class="content">
          <div class="greeting">
            👋 Hello Satax Team,
          </div>
          
          <p style="margin-bottom: 20px; color: #4b5563; font-size: 15px;">
            A potential client has just submitted a consultation request through your website. 
            Please review the details below and follow up within <strong style="color:#1e3a8a;">24 hours</strong> for best conversion.
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
                  <a href="mailto:${email}?subject=Regarding%20your%20consultation%20request%20with%20Satax%20Advisors&body=Hi%20${encodeURIComponent(name)}%2C%0A%0AThank%20you%20for%20reaching%20out%20to%20Satax%20Advisors.%20I%20received%20your%20consultation%20request%20regarding%3A%20${encodeURIComponent(services)}.%0A%0AI'd%20love%20to%20discuss%20this%20further%20and%20understand%20your%20requirements%20better.%20When%20would%20be%20a%20good%20time%20for%20a%20quick%20call%3F%0A%0ABest%20regards%2C%0A%0A[Your%20Name]%0ASatax%20Advisors">${email}</a>
                </div>
              </div>
            </div>

            <div class="info-row">
              <div class="info-icon">
                <span>📞</span>
              </div>
              <div class="info-content">
                <div class="info-label">Phone Number</div>
                <div class="info-value">
                  ${phone ? `<a href="tel:${cleanPhone}">${phone}</a>` : "Not provided"}
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
            <h3 style="color: #1f2937; margin-bottom: 15px; font-size: 18px; display: flex; align-items: center; flex-wrap: wrap;">
              📋 Services Requested
              <span class="priority-badge">${services ? services.split(",").length : 0} Service${services && services.split(",").length !== 1 ? "s" : ""}</span>
            </h3>
            <div style="background: #f0fdf4; border-radius: 12px; padding: 20px;">
              <ul class="services-list">
                ${formattedServices}
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
          
          <!-- Action Buttons - ALL WORKING -->
          <div class="action-buttons">
            <a href="mailto:${email}?subject=Regarding%20your%20consultation%20request%20with%20Satax%20Advisors&body=Hi%20${encodeURIComponent(name)}%2C%0A%0AThank%20you%20for%20reaching%20out%20to%20Satax%20Advisors.%20I%20received%20your%20consultation%20request%20regarding%3A%20${encodeURIComponent(services)}.%0A%0AI'd%20love%20to%20discuss%20this%20further%20and%20understand%20your%20requirements%20better.%20When%20would%20be%20a%20good%20time%20for%20a%20quick%20call%3F%0A%0ABest%20regards%2C%0A%0A[Your%20Name]%0ASatax%20Advisors" class="button">✉️ Email Client</a>
            
            ${phone ? `<a href="tel:${cleanPhone}" class="button button-secondary">📞 Call Client</a>` : ""}
            
            ${phone ? `<a href="${whatsappUrl}" class="button button-outline" style="border-color:#25D366; color:#075E54 !important;">💬 WhatsApp</a>` : ""}
            
            <a href="${calendarUrl}" target="_blank" class="button button-outline" style="border-color:#4285F4; color:#4285F4 !important;">📅 Schedule Meeting</a>
          </div>
          
          <!-- Quick Actions Note -->
          <div class="timestamp">
            <p>📌 <strong>Follow-up Checklist:</strong></p>
            <p>✓ <strong>Email</strong> - Click the email button above to reply</p>
            <p>✓ <strong>Call</strong> - Use phone button for direct contact</p>
            <p>✓ <strong>WhatsApp</strong> - Send quick text message</p>
            <p>✓ <strong>Calendar</strong> - Schedule discovery call</p>
            <p style="margin-top: 10px; font-size: 12px; color: #ef4444;">⏰ Response within 4 hours = 3x higher conversion</p>
          </div>
          
          <!-- Lead Quality Score -->
          <div style="text-align: center; margin-top: 20px;">
            <span style="background: #e5e7eb; padding: 6px 14px; border-radius: 20px; font-size: 12px; color: #6b7280; display: inline-block;">
              🎯 Lead Quality: ${services && message && phone ? "🔥 Hot Lead" : services && (message || phone) ? "💛 Warm Lead" : "💙 Cold Lead"}
            </span>
          </div>
        </div>
        
        <!-- Footer Section -->
        <div class="footer">
          <p>📧 Automated notification from <strong>Satax Advisors</strong></p>
          <p>🕐 Target response: Within 4 business hours</p>
          <p>🔒 Confidential client information</p>
          <p style="margin-top: 12px;">
            <a href="#" style="color:#60a5fa;">Notification Settings</a> | 
            <a href="#" style="color:#60a5fa;">View in CRM</a>
          </p>
          <p style="margin-top: 12px; font-size: 10px;">
            This is an automated message. Please do not reply to this email.
          </p>
        </div>
      </div>
    </body>
    </html>
  `;
}
