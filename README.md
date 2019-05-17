# Bias-variance-smoothing-shrinking

An explanation of key concepts in the statistical selection of subgroups, with a focus on applications to precision medicine. 

Provided as an [R Shiny app](https://shiny.rstudio.com/), this module provides an introduction to relevant contexts, background reading, interacitve tools, and exercises to explore these topics. 

# Funding

Data science modules developed by the University of Pittsburgh Biomedical Informatics Training Program with the support of the National Library of Medicine data science supplement to the University of Pittsburgh (Grant # T15LM007059-30S1). 

=======

# Using the module

## 1. Published Shiny App

This module can be run as an [R Shiny app](https://shiny.rstudio.com/). Simply open the [page on shinyapps.io](https://dbmipittdatascience.shinyapps.io/Bias-variance-smoothing-shrinking/).
<!-- https://dbmipittdatascience.shinyapps.io/Bias-variance-smoothing-shrinking/ -->

There are questions found regularly throughout the document. These can be saved to a local text file by pressing links that say "(click to save all responses)." These links will save a file in the local user's download file, entitled  ```_shiny_UserEntries_T15lumpsplit.txt```.which can be submitted to demonstrate completion of the module. 

*NOTE*: Due to embedded PDFs, this app works best with the Chrome browser. 

## 2. Customizing and redeploying.

You are welcome to revise this module to fit your needs, using the following steps:

### Install R and RStudio

You will need to start by installing  [R](https://www.r-project.org/) and [RStudio](https://www.rstudio.com/), through links on the appropriate sites.

### 2.2  Clone the code. 

1. Clone [the repository](https://github.com/dbmi-pitt/Bias-variance-smoothing-shrinking.git) to a convenient spot on your hard drive.

2. In RStudio, go to File->New Project.

3. Select "Existing Directory" from the "New Project" menu

4. Select the directory where you cloned the repository.


### 2.3 Install apprropriate software

Once you have R running in RStudio, go to the R console and follow these steps to configured needed packages:

1. Install [shinyJS](https://deanattali.com/shinyjs/basic) by running `install.packages("shinyjs")


2. Install [Bioconductor](https://www.bioconductor.org/install/) by running:

```
if (!requireNamespace("BiocManager"))
    install.packages("BiocManager")
BiocManager::install()
```

3. You will also need to load the older `BiocInsaller":
```
source("https://bioconductor.org/biocLite.R")
biocLite("BiocInstaller")
```
4. Set options for BiocInstaller:

```
options(repos = c(BiocInstaller::biocinstallRepos() ) )
```
3. Install [qvalue](https://www.bioconductor.org/packages/release/bioc/html/qvalue.html) by running
```
biocLite("qvalue")
```

4.  Define the following function:

```
.rerun = function(filenum = 1) {
  file = c("inst/T15lumpsplit/Bias-variance-smoothing-shrinking.Rmd",
           "inst/T15lumpsplit/Bias-variance-smoothing-shrinking-testing.Rmd")[filenum]
  rmarkdown::run(file=file,
    default_file = gsub(".*/", "", file),
    shiny_args = list(launch.browser = TRUE)
  )
}
```

## 2.4 Make your changes

Revise the code as needed. The main code can be found in `inst/T15lumpsplit/Bias-variance-smoothing-shrinking.Rmd'. 

run `rerun as needed to run the 

## 2.5 (Optional) Publish on shinyapps.io

Follow the directions in the [Shinyapps.io - Getting Started] (https://shiny.rstudio.com/articles/shinyapps.html) description to publish your revised code on the public Shinyapps server.
---

# Description

## 1. Learning outcomes

Upon completion of this module, students will be able to:

* Discuss the tradeoffs between "lumping" and "splitting" groups when considering statistical factors such as treatment effects such as differential response between patients.

* Develop parameterized models of probabilities of responses given diseaes across mixed groups 

* Use cross-validation to optimize mixtures 

* Explore the impact of various assumptions for priors. 

* Correct for multiple comparisons


*TBD* 

# 2. Licensing/Restrictions/Access

This work is licensed under a [Creative Commons Attribution-NonCommercial 4.0 International License](http://creativecommons.org/licenses/by-nc/4.0/").

## 3. Target Student Audience

Upper undergraduate or first-year graduate students.

## 4. Prerequisite Skills and Knowledge Required

Students should have some familiarity with Python programming, including at least basic exposure to object-oriented programming.


## 5. Domain Problem

Studies of treatment effects may be faced with challenges in determining when subsetting into smaller groups might, or might not be appropriate. Specifically, given a large group of patients with a low response rate, a specific subgroup with a much higher reponse rate might be strong candidates for the treatment. When is splitting into subgroups approrpiate, when is it not, and how might these differences be statistically modeled?

## 6. Dataset for the case study

None applicable - simulated data as shown in distributions in the interface.

## 7. Skills to be taught

### 7.1. Knowledge Representation 

Not Applicable

### 7.2. Computation

Not applicable

### 7.3. Visual Analytics

* Graphs of probabilities of response given membership in various subgroups
* Probabilitiy densities of mixtures given different distribution assumptions for subgroups
* Graphs of cross-validation results
* qvalue plots

### 7.4. Statistical Analyses

* Estimating probabilities of response given disease for different mixes of response rates across subgroups, including hypothesis-based approaches and Bayes factor
* Using cross-validation to optimize mixtures
* Using Bayesian priors
* Exploring impacts of various prior assumptions
* Using Benjamini-Hochberg, empirical Bayes, and qvalue approaches to handle multiple comparisons

### 7.5. Reproducbility

Not applicable.

## 8. Problem solving skills

Understanding issues in statistical analysis of groups with non-uniform responses to treatments. 

## 9. Reflection

* What does it mean to say that patient subgroups differed in their response to a given treatment?
* What assumptions are involved in such a determination, and how might they be addressed?
* What impact would these mixtures have on potential recommendations for treatment?
* How can relevant statistical issues be communicated to physicians and patients to guide informed decision-making? 
