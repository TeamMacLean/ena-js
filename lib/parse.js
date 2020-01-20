module.exports = {
    // analysis() {
    //     const object = {
    //         "ANALYSIS_SET": {
    //             "ANALYSIS": [{
    //                 "$": {
    //                     "alias": "NGS-RGCB_waterPolo",
    //                     "center_name": "EBI"
    //                 },
    //                 "TITLE": ["Alignment BAM aligning reads in Illumina "],
    //                 "DESCRIPTION": ["Here we use comparative transcriptomics to characterize the evolutionary adaptation of the fungus "],
    //                 "STUDY_REF": [{
    //                     "$": {
    //                         "refname": "NGS-RGCB_waterPolo"
    //                     }
    //                 }],
    //                 "SAMPLE_REF": [{
    //                     "$": {
    //                         "refname": "NGS-RGCB_waterPolo"
    //                     }
    //                 }],
    //                 "ANALYSIS_TYPE": [{
    //                     "REFERENCE_ALIGNMENT": [{
    //                         "ASSEMBLY": [{
    //                             "STANDARD": [{
    //                                 "$": {
    //                                     "accession": "GCA_000149035.1",
    //                                     "refname": "C_graminicola_M1_001_V1"
    //                                 }
    //                             }]
    //                         }],
    //                         "SEQUENCE": [{
    //                             "$": {
    //                                 "accession": "GG697609.1",
    //                                 "label": "GG697609"
    //                             }
    //                         }, {
    //                             "$": {
    //                                 "accession": "ACOD01000654.1",
    //                                 "label": "GG697608"
    //                             }
    //                         }, {
    //                             "$": {
    //                                 "accession": "ACOD01000653.1",
    //                                 "label": "GG697607"
    //                             }
    //                         }]
    //                     }]
    //                 }],
    //                 "FILES": [{
    //                     "FILE": [{
    //                         "$": {
    //                             "filename": "waterPolo_analysis.bam",
    //                             "filetype": "bam",
    //                             "checksum_method": "MD5",
    //                             "checksum": "57d4864fbb781dceafd814d93d183909"
    //                         }
    //                     }]
    //                 }]
    //             }]
    //         }
    //     }
    // },
    experiment() {
        const object = {
            "EXPERIMENT_SET": {
                "EXPERIMENT": [{
                    "$": {
                        "alias": "NGS-RGCB_waterPolo",
                        "center_name": "EBI"
                    },
                    "STUDY_REF": [{
                        "$": {
                            "refname": "NGS-RGCB_waterPolo",
                            "refcenter": "EBI"
                        }
                    }],
                    "DESIGN": [{
                        "DESIGN_DESCRIPTION": [""],
                        "SAMPLE_DESCRIPTOR": [{
                            "$": {
                                "refname": "NGS-RGCB_waterPolo",
                                "refcenter": "EBI"
                            }
                        }],
                        "LIBRARY_DESCRIPTOR": [{
                            "LIBRARY_NAME": ["libName-1"],
                            "LIBRARY_STRATEGY": ["OTHER"],
                            "LIBRARY_SOURCE": ["GENOMIC"],
                            "LIBRARY_SELECTION": ["size fractionation"],
                            "LIBRARY_LAYOUT": [{
                                "SINGLE": [""]
                            }]
                        }],
                        "SPOT_DESCRIPTOR": [{
                            "SPOT_DECODE_SPEC": [{
                                "SPOT_LENGTH": ["37"],
                                "READ_SPEC": [{
                                    "READ_INDEX": ["0"],
                                    "READ_CLASS": ["Application Read"],
                                    "READ_TYPE": ["Forward"],
                                    "BASE_COORD": ["1"]
                                }]
                            }]
                        }]
                    }],
                    "PLATFORM": [{
                        "ILLUMINA": [{
                            "INSTRUMENT_MODEL": ["Illumina Genome Analyzer IIx"]
                        }]
                    }],
                    "PROCESSING": [""]
                }]
            }
        }
    },
    run(alias, center, experimentRef, files) {
        const object = {
            "RUN_SET": {
                "RUN": [{
                    "$": {
                        "alias": alias,
                        "run_center": center,
                        "center_name": center
                    },
                    "EXPERIMENT_REF": [{
                        "$": {
                            "refname": experimentRef
                        }
                    }],
                    "DATA_BLOCK": [{
                        "FILES": [{
                            "FILE": [{
                                "$": {
                                    "filename": "waterPolo.bam",
                                    "filetype": "bam",
                                    "checksum_method": "MD5",
                                    "checksum": "72334567890123456789012345678912"
                                }
                            }]
                        }]
                    }],
                    // "RUN_ATTRIBUTES": [{
                    //     "RUN_ATTRIBUTE": [{
                    //         "TAG": ["run"],
                    //         "VALUE": ["062"]
                    //     }, {
                    //         "TAG": ["total_bases"],
                    //         "VALUE": ["42148584"],
                    //         "UNITS": ["bp"]
                    //     }, {
                    //         "TAG": ["actual_read_length"],
                    //         "VALUE": ["36"]
                    //     }]
                    // }]
                }]
            }
        }
    },
    sample(title, alias, description, center) {
        const object = {
            "SAMPLE_SET": {
                "SAMPLE": [{
                    "$": {
                        "alias": alias,
                        "center_name": center
                    },
                    "TITLE": [title],
                    "SAMPLE_NAME": [{
                        "TAXON_ID": [taxonID],
                        "SCIENTIFIC_NAME": [scientificName],
                        "COMMON_NAME": [commonName]
                    }],
                    "DESCRIPTION": [description],
                    // "SAMPLE_ATTRIBUTES": [{
                    //     "SAMPLE_ATTRIBUTE": [{
                    //         "TAG": ["ENA-CHECKLIST"],
                    //         "VALUE": ["ERC000011"]
                    //     }]
                    // }]
                }]
            }
        }
    },
    StudyTypes = {
        wholeGenomeSequencing: "Whole Genome Sequencing",
        metagenomics: "Metagenomics",
        transcriptomeAnalysis: "Transcriptome Analysis",
        resequencing: "Resequencing",
        epigenetics: "Epigenetics",
        syntheticGenomics: "Synthetic Genomics",
        forensicOrPaleoGeonmics: "Forensic or Paleo-genomics",
        geneRefulationStudy: "Gene Regulation Study",
        cancerGenimics: "Cancer Genomics",
        populationGenomics: "Population Genomics",
        rnaseq: "RNASeq",
        exomeSequencing: "Exome Sequencing",
        pooledCloneSequencing: "Pooled Clone Sequencing",
        other: "Other"
    },
    study({ title, alias, abstract, center, studyType }) {


        const object = {
            "STUDY_SET": {
                "STUDY": [{
                    "$": {
                        "alias": alias,//"NGS-RGCB_waterPolo", //needs to be unique to account
                        "center_name": center,//"EBI"
                    },
                    "DESCRIPTOR": [{
                        // "CENTER_PROJECT_NAME": [name],
                        "STUDY_TITLE": [title],//["Sequencing data of different participants of the NGS course"],
                        "STUDY_TYPE": [{
                            "$": {
                                "existing_study_type": studyType
                            }
                        }],
                        "STUDY_ABSTRACT": abstract
                    }],
                    // "STUDY_ATTRIBUTES": attributes.map(a => {
                    //     return {
                    //         "STUDY_ATTRIBUTE": [{
                    //             "TAG": a.tag,
                    //             "VALUE": a.value
                    //         }]
                    //     }
                    // })
                    // "STUDY_ATTRIBUTES": [{
                    //     "STUDY_ATTRIBUTE": [{
                    //         "TAG": ["Number of sequences"],
                    //         "VALUE": ["30"]
                    //     }]
                    // }]
                }]
            }
        }
        //TODO convert to xml and return
    },
    // submissionStudy(alias, center, actions) {
    //     const object = {
    //         "SUBMISSION": {
    //             "$": {
    //                 "alias": alias,
    //                 "center_name": center
    //             },
    //             "ACTIONS": [{
    //                 "ACTION": [{
    //                     "VALIDATE": [{
    //                         "$": {
    //                             "source": "study.xml",
    //                             "schema": "study"
    //                         }
    //                     }]
    //                 }, {
    //                     "HOLD": [{
    //                         "$": {
    //                             "HoldUntilDate": "2015-03-07Z"
    //                         }
    //                     }]
    //                 }]
    //             }]
    //         }
    //     }
    // },
    submissionAction(type, source, schema) {
        const object = {
            "ACTION": [{
                type: [{
                    "$": {
                        "source": source,
                        "schema": schema
                    }
                }]
            }]
        },
    },
    submission(alias, center, actions) {
        const object = {
            "SUBMISSION": {
                "$": {
                    "alias": alias,
                    "center_name": center
                },
                "ACTIONS": [{
                    "ACTION": [{
                        "VALIDATE": [{
                            "$": {
                                "source": "study.xml",
                                "schema": "study"
                            }
                        }]
                    }, {
                        "VALIDATE": [{
                            "$": {
                                "source": "sample.xml",
                                "schema": "sample"
                            }
                        }]
                    }, {
                        "VALIDATE": [{
                            "$": {
                                "source": "experiment.xml",
                                "schema": "experiment"
                            }
                        }]
                    }, {
                        "VALIDATE": [{
                            "$": {
                                "source": "run.xml",
                                "schema": "run"
                            }
                        }]
                    }, {
                        "HOLD": [{
                            "$": {
                                "HoldUntilDate": "2020-03-07Z"
                            }
                        }]
                    }]
                }]
            }
        }
    }

}

// const updateSample = {
//     "SAMPLE_SET": {
//         "SAMPLE": [{
//             "$": {
//                 "alias": "NGS-RGCB_waterPolo",
//                 "center_name": "EBI"
//             },
//             "TITLE": ["Sample from one of the NGS course participants"],
//             "SAMPLE_NAME": [{
//                 "TAXON_ID": ["9606"],
//                 "SCIENTIFIC_NAME": ["Homo sapiens"],
//                 "COMMON_NAME": ["Human"]
//             }],
//             "DESCRIPTION": ["NGS Course location, sample collected on 15th Oct 2013"],
//             "SAMPLE_ATTRIBUTES": [{
//                 "SAMPLE_ATTRIBUTE": [{
//                     "TAG": ["ENA-CHECKLIST"],
//                     "VALUE": ["ERC000011"]
//                 }]
//             }]
//         }]
//     }
// }
// const updateSubmission = {
//     "SUBMISSION_SET": {
//         "SUBMISSION": [{
//             "$": {
//                 "alias": "UpdateRGCBSubmission_waterPolo",
//                 "center_name": "EBI",
//                 "submission_date": "2014-09-19T10:00:00Z"
//             },
//             "ACTIONS": [{
//                 "ACTION": [{
//                     "MODIFY": [{
//                         "$": {
//                             "schema": "sample",
//                             "source": "sample.xml"
//                         }
//                     }]
//                 }]
//             }]
//         }]
//     }
// }
// const publish = {
//     "SUBMISSION_SET": {
//         "SUBMISSION": [{
//             "$": {
//                 "alias": "Submission-publishing_waterPolo",
//                 "center_name": "EBI",
//                 "submission_date": "2014-09-19T10:00:00Z"
//             },
//             "ACTIONS": [{
//                 "ACTION": [{
//                     "RELEASE": [{
//                         "$": {
//                             "target": "insert sample accession here"
//                         }
//                     }]
//                 }]
//             }]
//         }]
//     }
// }