# Oluwatobiloba Adebisi — Portfolio

A personal portfolio for **Oluwatobiloba Adebisi**, built around two engineering disciplines: **Software Engineering** and **Data Engineering**.

The portfolio uses separate routes to present each area of expertise, allowing the projects, experience, skills, and certifications shown to be tailored to the selected discipline.

## Overview

The portfolio is designed to showcase Oluwatobiloba's work across full-stack software development, cloud engineering, data engineering, and analytics.

The Software Engineering route focuses on full-stack applications, product development, and software systems.

The Data Engineering route focuses on cloud-native data pipelines, ETL/ELT workflows, analytics infrastructure, real-time processing, and AWS-based solutions.

Content such as project information, experience, skills, certifications, and site settings is managed through **Sanity**, allowing the portfolio to be updated without modifying the application code.

## Features

* Dual portfolio routes for Software Engineering and Data Engineering
* Dynamic content powered by Sanity CMS
* Project and case study pages
* Experience and skills sections
* Data Engineering certifications section
* Responsive design across desktop and mobile
* Dark mode support
* Scroll-based reveal animations
* Sanity-powered image management
* Dynamic project filtering by engineering discipline
* Contact section with direct communication links

## Tech Stack

### Frontend

* React
* TypeScript
* Vite
* Tailwind CSS

### CMS & Content

* Sanity
* Sanity Image API

### Development

* ESLint
* Git
* GitHub


## Content Management

Portfolio content is managed through Sanity rather than being hardcoded into the React components.

This includes:

* Personal information
* About content for each route
* Portrait and other images
* Experience
* Skills
* Projects
* Certifications
* Contact information
* Site settings

The frontend retrieves this content through custom React hooks and renders it according to the active portfolio route.

## Routes

The portfolio supports two primary experiences:

### Software Engineering

Focused on full-stack software development, including frontend interfaces, backend systems, APIs, databases, and complete web applications.

### Data Engineering

Focused on data infrastructure, cloud architecture, ETL/ELT pipelines, analytics, data warehousing, real-time processing, and AWS solutions.