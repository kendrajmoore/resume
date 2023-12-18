import { useState } from 'react'

import './App.css'

function App() {


  return (
    <>
      <div className='header'>
        <h1 id="header-name">Kendra Moore</h1>
        <h3 id="header-subtitle">Cloud Engineer | Military Veteran | Project Manager</h3>
        <h4>kendra.j.mosley@gmail.com</h4>
        <a href="https://linkedin.com/in/kendrajmoore"><h4>/in/kendrajmoore</h4></a>
      </div>
      <p className='jobtitle'>EXPERIENCE</p>
      <hr/>
      <div className='jobtitle'>
        <p>Virtual Service Operations / System Administrator (2022-present)</p>
      </div>
      <div className="jobtext">
        <ul>
          <li>Spearheaded the development of an RHEL prototype on Azure, crafting a compelling client proposal that secured a 5-year contract valued at $3 million</li>
          <li>Vigilantly monitored system performance metrics, contributing to a remarkable record of 99.999% uptime, ensuring seamless operations and minimal service disruptions.</li>
          <li>Provided robust multi-cloud support across Azure, Skytap, and AWS platforms, ensuring versatile and reliable cloud services tailored to diverse client needs.</li>
        </ul>
      </div>
      <div className='jobtitle'>
        <p>University of California, Berkeley / Helpdesk Consultant (2022)</p>
      </div>
      <div className="jobtext">
        <ul>
          <li>Provided dedicated on-call internet router support catering specifically to the needs of Berkeley research teams</li>
          <li>Actively involved in community service by providing in-person assistance to disadvantaged students, distributing hotspots and laptops to facilitate their educational needs </li>
          <li>Maintained a consistently empty ticket queue through an efficient resolution of issues</li>
        </ul>
      </div>
      <div className='jobtitle'>
        <p>US Army / Assistant Program Manager (2015-2017)</p>
      </div>
      <div className="jobtext">
        <ul>
          <li>Planned and executed pre-deployment training for a battalion. Resulting in a successful deployment of 600 soldiers and 70 million in equipment</li>
          <li>Rapidly assumed the role of Battalion Environmental Officer, implementing compliance measures that prevented fines of over $10,000, a cost-saving of 100% over the previous year.</li>
        </ul>
      </div>
      <div className='jobtitle'>
        <p>US Army / Project Manager (2011-2015)</p>
      </div>
      <div className="jobtext">
        <ul>
          <li>Championed the professional and operational development of 29 team members, ensuring a 100% pass rate in PT tests, written exams, and missile readiness drills, contributing to the battalion’s overall operational safety and readiness.</li>
          <li>Ensured operational readiness by stepping in for crew members as needed, maintaining 100% team efficiency, and was selected to lead a platoon due to superior performance and leadership skills.</li>
        </ul>
      </div>
      <p className='jobtitle'>TECHNOLOGIES & CERTIFICATIONS</p>
      <hr/>
      <p><b>Tech Skills</b>: Python, JavaScript, C, Bash, SQL, Ansible, Kubernetes, CI/CD, ELB, Git, Github, RDS, Jenkins, S3, SDLC, Terraform, Linux, Windows Server, TCP, DNS, DHCP, VPN, IPv4, IPv6, ServiceNow, Confluence, Slack, Jira</p>
      <p><b>Certifications</b>: CompTIA Network +, Linux+, AWS Cloud Practitioner, Terraform Certified Associate</p>
      <p className='jobtitle'>EDUCATION</p>
      <hr/>
      <div>
        <p>University of California, Berkeley, Master of Information Management and Systems (2023)</p>
      </div> 
    </>
  )
}

export default App
