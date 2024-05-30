---
title: Smart India Hackathon '24 Result Analysis
publishDate: 2018-10-07 00:00:00
img: /assets/sih-result-analysis/profile.png
img_alt: A github preview image of the repository of sih 2023 analysis
description: |
  A Exploratory Data Analysis of the result of the prestigious Smart India Hackathon 2023 using the data scraped from the official website
tags:
  - EDA
  - Pandas
  - Seaborn
---

<br>[![PyPI Downloads](https://img.shields.io/badge/repository_link-brightgreen?style=for-the-badge)](https://github.com/DuanBoomer/Smart-India-Hackathon-Result-Analysis)

## Overview
A analysis of the SIH 2023 result. It entails to answer simple but interesting questions. The data is scraped from the [official SIH result webpage](https://www.sih.gov.in/sih2023-grand-finale-result), hence, it has credibility. The analysis follows a simple structure of preprocessing. 

The questions that the analysis answers are:

- [What is the distribution of problem statements in the two categories?](#what-is-the-distribution-of-problem-statements-in-the-two-categories)
- [What is the average distribution of problem statements in nodal centres and teams?](#what-is-the-average-distribution-of-problem-statements-in-nodal-centres-and-teams)
- [Which organizations had the most problem statements?](#which-organizations-had-the-most-problem-statements)
- [What are the organizations that give away the most money?](#what-are-the-organizations-that-give-away-the-most-money)
- [Which colleges had the most participation](#which-colleges-had-the-most-participation)
- [Do nodal centres also participate in the hackathon](#do-nodal-centres-also-participate-in-the-hackathon)
- [What is the ranking of nodal centres based on the number of problem statements they hosted?](#what-is-the-ranking-of-nodal-centres-based-on-the-number-of-problem-statements-they-hosted)

## How I got the idea
I actually participated in SIH 2023 in the problem statement _PS1419_ by Ministry of Defence. We had to develop a intrusion detection system ([checkout the notion page](https://lapis-bookcase-e2e.notion.site/Let-s-Detect-Humans-eecfbbdaf3fb4006ad398101d6bfc21b)). But unfortunately we were not selected. When the results came out, I was looking at the webpage and the data looked quite intriguing to me and I was stuck with this idea.


## Some general information about the data
The data span is 275 X 12. A total of 36 government organizations and 201 colleges participated in SIH 2023. 48 nodal centres across india were prepped for the hackathon and ₹2,27,10,000 were spent only on the prizes to the winners.

## Questions answered during the analysis

### What is the distribution of problem statements in the two categories?
There are about 220 software problem statements and 70 hardware. The government has more problems with software then hardware, I guess.

![distribution of problem statements in the two categories](/assets/sih-result-analysis/output_12_0.png)

### What is the average distribution of problem statements in nodal centres and teams?
Most nodal centres on average were assigned 5-6 problem statements and each problem statement was assigned about 1 team on average.

![distribution of problem statements in nodal centres](/assets/sih-result-analysis/output_16_0.png)

![distribution of problem statements in teams](/assets/sih-result-analysis/output_17_0.png)

### Which organizations had the most problem statements?
AICTE is the host as well as the most powerful contributor in SIH. Most problem statements are in student innovation which is a free for all competition.

![organizations had the most problem statements](/assets/sih-result-analysis/output_18_0.png)

### What are the organizations that gave away the most money?
As expected since AICTE has the mmost problem statements, hence gave away the most money.

![organizations that gave away the most money](/assets/sih-result-analysis/output_21_0.png)

### Which colleges had the most participation?

![colleges had the most participation](/assets/sih-result-analysis/output_25_0.png)

### Do nodal centres also participate in the hackathon
No, nodal centres don't participate. We used a simple match `'COLLEGE == NODAL CENTER'`. This query retured no data.

Sorry to hear that students at the nodal centres.

### What is the ranking of nodal centres based on the number of problem statements they hosted?

![colleges had the most participation](/assets/sih-result-analysis/output_26_0.png)

<br>[![PyPI Downloads](https://img.shields.io/badge/Made%20with%20%F0%9F%92%96%20by-Chirag-brightgreen?style=for-the-badge&logo=appveyor)](https://github.com/DuanBoomer)