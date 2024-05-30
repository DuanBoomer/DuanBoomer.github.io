---
title: GDSC Entry Form Analysis and Selection
publishDate: 2019-10-02 00:00:00
img: /assets/entry-form-analysis/profile.png
img_alt: the github repository preview of the analysis
description: |
  An exploratory data analysis of the club registration for GDSC at my college.
tags:
  - EDA
  - Pandas
  - Seaborn
---

<br>[![PyPI Downloads](https://img.shields.io/badge/repository_link-brightgreen?style=for-the-badge)](https://github.com/DuanBoomer/Club-Registration-Analysis)

## Overview

A analysis of the first registration form of the GDSC (google developer student club) of our college. It aimed to classify and select students based on there skills while giving insights about there distribution along various dimentions. It was my first ever work on real world data and made me realize that real world is messy af.

The analysis is segregated into the following parts:

- [Preprocessing](#preprocessing-the-data)
- [Exploratory Data Analysis (EDA)](#exploratory-data-analysis-eda)
- [Gender Distribution of students](#gender-distribution-of-students)
- [Heuristic based selection](#heuristic-selection)

## Preprocessing the data

- **Column Renaming**

  First we will start with renaming out columns. Some rules of thumb for columns names.
  - A column name must have two to three words max.
  - All letters must be in small case.
  - And there should be no spaces in subsequent words.

<br>

- **Dropping unnessary columns**

  Here we will drop any columns that we do not need for our analysis.

<br>

- **Parsing Data**
  - Parsing Date and Time
  - Removing trailing spaces and lowercase everything
  - Fill all NaN's and funky values

<br>

- **Encoding values**

  For our analysis purposes we will binary encode the columns which has any links and paragraphs.

<br>

- **Spliting strings**

  Some entries such that tools and languages have multiple values but they are grouped together as a comma , and slash / separated string. So we will need to open this encoding to use these the values efficiently.


## Exploratory Data Analysis (EDA)

### Student distribution across courses

The graph shows that BTech 1st year students registered the most. BTech is generally registered more because it has much more students then BCA.

![student distribution across courses](/assets/entry-form-analysis/output_34_0.png)

### Field selected by students

The most selected obviously are programming and coding, but they are kind of vague, so we would not consider them here as a field. Hence, the most selected field after removing the vagueness is AI/ML.

![field selected by students](/assets/entry-form-analysis/output_35_0.png)

### Devices used by students

![devices used by students](/assets/entry-form-analysis/output_36_0.png)

### Tools used by students

The most used tool obviously is VS Code, because most of the applicants are novice programmers.

![tools used by students](/assets/entry-form-analysis/output_37_0.png)

### Languages known by students

C, C++ are the most known because they are part of the college curriculum. After that majorly we have python, html/css (even if they are not programming languages), java, js and sql.

![languages known by students](/assets/entry-form-analysis/output_38_0.png)

### OS used by students

Windows wins here

![os used by students](/assets/entry-form-analysis/output_39_0.png)

### Documents, Links and Personal information

There were many fields with personal information in the form, the information itself is useless for analysis but a simple filled or not filled is useful. The pie charts show that distribution.

![documents, links and personal information](/assets/entry-form-analysis/output_40_0.png)

### Time cast of the registration form

This graph shows the time cast of the registration form. The form was open for a week from 13 to 21. It shows a steady progress in entries over the days but a abnormal spike of entries from BTech 1st year on 16. Seems like some annoucements were made on that day by the faculty.

![time cast of the registration form](/assets/entry-form-analysis/output_41_0.png)

## Gender Distribution of students

The dataset is void of any gender column because the form didn't have one, so I used a API which tells genders of people using there names. The registrations were heavily skewed towards male.

![gender distribution of students](/assets/entry-form-analysis/output_52_0.png)

## Heuristic selection

A weighted sum heuristic was used to score the students. Technical skills were given more weight. A threshold of 18 was used. 18 signifies the bare minimum of points that a student can get if the form is filled correctly and has the bare minimum of technical skills. A total of 42 students were selected from 154.

![gender distribution of selected students](/assets/entry-form-analysis/output_64_0.png)

This graph shows the gender distribution of selected students. It is again highly skewed towards males with only 1 girl being selected. 

Hence, a ranking of girls was calculated separately and the top 10 were chosen from it, hence, a total of 52 students were selected into the GDSC.

<br>[![PyPI Downloads](https://img.shields.io/badge/Made%20with%20%F0%9F%92%96%20by-Chirag-brightgreen?style=for-the-badge&logo=appveyor)](https://github.com/DuanBoomer)