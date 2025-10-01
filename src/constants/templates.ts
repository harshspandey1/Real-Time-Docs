export const templates = [
  {
    id: "blank",
    label: "Blank Document",
    imageUrl: "/blank-document.svg",
    initialContent: ""
  },
  {
    id: "software-proposal",
    label: "Software developement proposal",
    imageUrl: "/software-proposal.svg",
    initialContent: `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Software Development Proposal</title>
  <style>
    body { font-family: Georgia, serif; padding: 48px; color: #111827; }
    .container { max-width: 900px; margin: 0 auto; }
    h1 { font-size: 30px; margin-bottom: 8px; }
    h2 { font-size: 18px; margin-top: 24px; }
    .meta { color: #6b7280; margin-bottom: 24px; }
    ul { margin-left: 20px; }
  </style>
</head>
<body>
  <div class="container">
    <h1>Project Title</h1>
    <div class="meta">Prepared for: Client Name • Date</div>
    <h2>Executive Summary</h2>
    <p>Concise summary of the proposal, goals, and high-level approach.</p>
    <h2>Scope & Deliverables</h2>
    <ul>
      <li>Deliverable 1 — description</li>
      <li>Deliverable 2 — description</li>
    </ul>
    <h2>Timeline</h2>
    <p>Milestones and estimated dates.</p>
    <h2>Cost</h2>
    <p>Projected budget and payment terms.</p>
  </div>
</body>
</html>`
  },
  {
    id: "project-proposal",
    label: "Project proposal",
    imageUrl: "/project-proposal.svg",
    initialContent: `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Project Proposal</title>
  <style>
    body { font-family: "Helvetica Neue", Arial, sans-serif; padding: 40px; color: #0f172a; }
    .container { max-width: 840px; margin: 0 auto; }
    h1 { font-size: 26px; margin-bottom: 12px; }
    h2 { margin-top: 20px; font-size: 16px; }
    .section { margin-bottom: 16px; }
  </style>
</head>
<body>
  <div class="container">
    <h1>Project Name</h1>
    <div class="section">
      <strong>Overview</strong>
      <p>Short overview of the project, objectives, and expected impact.</p>
    </div>
    <div class="section">
      <h2>Objectives</h2>
      <p>Key objectives and success criteria.</p>
    </div>
    <div class="section">
      <h2>Approach</h2>
      <p>Planned methodology and tasks.</p>
    </div>
    <div class="section">
      <h2>Resources & Timeline</h2>
      <p>Team, tools, and schedule.</p>
    </div>
  </div>
</body>
</html>`
  },
  {
    id: "business-letter",
    label: "Business letter",
    imageUrl: "/business-letter.svg",
    initialContent: `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Business Letter</title>
  <style>
    body { font-family: "Times New Roman", Times, serif; padding: 48px; color: #111827; }
    .container { max-width: 720px; margin: 0 auto; }
    .address, .signature { margin-top: 24px; }
    p { margin: 12px 0; }
  </style>
</head>
<body>
  <div class="container">
    <div class="address">
      <p>Sender Name<br/>Sender Company<br/>Address Line 1<br/>City, State ZIP</p>
      <p>Date</p>
      <p>Recipient Name<br/>Recipient Company<br/>Address Line 1<br/>City, State ZIP</p>
    </div>
    <p>Dear Recipient,</p>
    <p>Opening paragraph that states the purpose of the letter.</p>
    <p>Body paragraph(s) with details, requests, or information.</p>
    <p>Sincerely,</p>
    <div class="signature">
      <p>Sender Name<br/>Title</p>
    </div>
  </div>
</body>
</html>`
  },
  {
    id: "resume",
    label: "Resume",
    imageUrl: "/resume.svg",
    initialContent: `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Resume</title>
  <style>
    body { font-family: Inter, Arial, sans-serif; padding: 36px; color: #0f172a; }
    .container { max-width: 800px; margin: 0 auto; }
    .header { display:flex; justify-content:space-between; align-items:center; }
    h1 { margin:0; font-size:22px; }
    .section { margin-top:18px; }
    .muted { color:#6b7280; font-size:14px; }
    ul { margin-left:18px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Your Name</h1>
      <div class="muted">City • email@example.com • (123) 456-7890</div>
    </div>
    <div class="section">
      <h2>Summary</h2>
      <p>Brief professional summary.</p>
    </div>
    <div class="section">
      <h2>Experience</h2>
      <ul>
        <li><strong>Job Title</strong> — Company (Dates)<br/>Short description</li>
      </ul>
    </div>
    <div class="section">
      <h2>Education</h2>
      <p>Degree — Institution (Year)</p>
    </div>
    <div class="section">
      <h2>Skills</h2>
      <p>Relevant skills separated by commas</p>
    </div>
  </div>
</body>
</html>`
  },
  {
    id: "cover-letter",
    label: "Cover letter",
    imageUrl: "/cover-letter.svg",
    initialContent: `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Cover Letter</title>
  <style>
    body { font-family: Georgia, serif; padding: 48px; color: #111827; }
    .container { max-width: 720px; margin: 0 auto; }
    p { margin: 12px 0; }
  </style>
</head>
<body>
  <div class="container">
    <p>Hiring Manager Name</p>
    <p>Company Name</p>
    <p>Dear Hiring Manager,</p>
    <p>Opening paragraph explaining the role you are applying for and a brief hook.</p>
    <p>Second paragraph highlighting key achievements and fit for the role.</p>
    <p>Closing paragraph with call to action and thanks.</p>
    <p>Sincerely,</p>
    <p>Your Name</p>
  </div>
</body>
</html>`
  },
  {
    id: "letter",
    label: "Letter",
    imageUrl: "/letter.svg",
    initialContent: `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Letter</title>
  <style>
    body { font-family: "Times New Roman", Times, serif; padding: 48px; color: #111827; }
    .container { max-width: 720px; margin: 0 auto; }
    p { margin: 12px 0; }
  </style>
</head>
<body>
  <div class="container">
    <p>Date</p>
    <p>Recipient Name<br/>Recipient Address</p>
    <p>Dear [Name],</p>
    <p>Body of the letter with your message. Use paragraphs to separate ideas.</p>
    <p>Yours truly,</p>
    <p>Sender Name</p>
  </div>
</body>
</html>`
  }
];
