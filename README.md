# Bias-variance-smoothing-shrinking

An explanation of key concepts in the statistical selection of subgroups, with a focus on applications to precision medicine. 

Provided as an [R Shiny app](https://shiny.rstudio.com/), this module provides an introduction to relevant contexts, background reading, interacitve tools, and exercises to explore these topics. 

# Funding

Data science modules developed by the University of Pittsburgh Biomedical Informatics Training Program with the support of the National Library of Medicine data science supplement to the University of Pittsburgh (Grant # T15LM007059-30S1). 

=======

# Using the module

## 1. Published Shiny App

This module can be run as an [R Shiny app](https://shiny.rstudio.com/). Simply open the [page on shinyapps.io](https://trials.shinyapps.io/Bias-variance-smoothing-shrinking/).
<!-- https://dbmipittdatascience.shinyapps.io/Bias-variance-smoothing-shrinking/ -->

There are questions found regularly throughout the document. These can be saved to a local text file by pressing links that say "(click to save all responses)." These links will save a file in the local user's download file, entitled  ```_shiny_UserEntries_T15lumpsplit.txt```.which can be submitted to demonstrate completion of the module. 

*NOTE*: Due to embedded PDFs, this app works best with the Chrome browser. 

## 2. Customizing and redeploying.

You are welcome to revise this module to fit your needs, using the following steps:

### 2.1 Install apprropriate software

You will need to start by installing  [R](https://www.r-project.org/) and [RStudio](https://www.rstudio.com/), through links on the appropriate sites.

Once you have R running in RStudio, go to the R console and follow these steps to configured needed packages:

1. Install [shinyJS](https://deanattali.com/shinyjs/basic) by running `install.packages("shinyjs")

2. Install [Bioconductor](https://www.bioconductor.org/install/) by running:

```
if (!requireNamespace("BiocManager"))
    install.packages("BiocManager")
BiocManager::install()
```

3. Install [qvalue](https://www.bioconductor.org/packages/release/bioc/html/qvalue.html) by running
```
BiocManager::install("qvalue", version = "3.8")
```

### 2.2 Install the code

Run the following commands from the R studio

1. Configure optiosn for Biocondcutor: `options(repos = c(BiocInstaller::biocinstallRepos() )`

2. Install the module from GitHub 
```
devtools::install_github(paste0("dbmi-pitt", "/Bias-variance-smoothing-shrinking"),build_vignettes=TRUE)
```

If you have forked the module to your own repository, replace "dbmi-pitt/" with the name of the account or organization where you forked the code. 

3. Define the following function:

```
rerun = function(filenum = 1) {
  file = c("inst/T15lumpsplit/Bias-variance-smoothing-shrinking.Rmd",
           "inst/T15lumpsplit/Bias-variance-smoothing-shrinking-testing.Rmd")[filenum]
  rmarkdown::run(file=file,
    default_file = gsub(".*/", "", file),
    shiny_args = list(launch.browser = TRUE)
  )
}
```

### 2.3 Revise the code. 


# Description

## 1. Learning outcomes

*TBD* 

# 2. Licensing/Restrictions/Access

This work is licensed under a [Creative Commons Attribution-NonCommercial 4.0 International License](http://creativecommons.org/licenses/by-nc/4.0/").

## 3. Target Student Audience

Upper undergraduate or first-year graduate students.

## 4. Prerequisite Skills and Knowledge Required

Students should have some familiarity with Python programming, including at least basic exposure to object-oriented programming.


## 5. Domain Problem

*TBD*

## 6. Dataset for the case study

None applicable - simulated data as shown in distributions in the interface.

## 7. Skills to be taught

## 7.1. Knowledge Representation 

*TBD*

## 7.2. Computation

*TBD*

## 7.3. Visual Analytics

*TBD*

## 7.4. Statistical Analyses

*TBD* 

## 7.5. Reproducbility

*TBD*

## 8. Problem solving skills

*TBD*

## 9. Reflection

*TBD*
