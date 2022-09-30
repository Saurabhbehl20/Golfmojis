module.exports = {
  "entry": {
    "app": {
      "import": [
        "@scripts/app",
        "@styles/app"
      ]
    },
    "editor": {
      "import": [
        "@scripts/editor",
        "@styles/editor"
      ]
    }
  },
  "bail": true,
  "cache": {
    "name": "bud.production",
    "type": "filesystem",
    "version": "9sabmp4_f4jeohcxq6btrycrnuo_",
    "cacheDirectory": "/sites/golfmojis.demo.techyscouts.dev/files/web/wp-content/themes/golfmojis/.budfiles/cache/webpack",
    "managedPaths": [
      "/sites/golfmojis.demo.techyscouts.dev/files/web/wp-content/themes/golfmojis/node_modules"
    ],
    "buildDependencies": {
      "bud": [
        "/sites/golfmojis.demo.techyscouts.dev/files/web/wp-content/themes/golfmojis/package.json",
        "/sites/golfmojis.demo.techyscouts.dev/files/web/wp-content/themes/golfmojis/.editorconfig",
        "/sites/golfmojis.demo.techyscouts.dev/files/web/wp-content/themes/golfmojis/bud.config.mjs",
        "/sites/golfmojis.demo.techyscouts.dev/files/web/wp-content/themes/golfmojis/composer.json",
        "/sites/golfmojis.demo.techyscouts.dev/files/web/wp-content/themes/golfmojis/jsconfig.json",
        "/sites/golfmojis.demo.techyscouts.dev/files/web/wp-content/themes/golfmojis/tailwind.config.js",
        "/sites/golfmojis.demo.techyscouts.dev/files/web/wp-content/themes/golfmojis/theme.json"
      ]
    }
  },
  "context": "/sites/golfmojis.demo.techyscouts.dev/files/web/wp-content/themes/golfmojis",
  "experiments": {
    "buildHttp": {
      "allowedUris": [
        null,
        "https://gist.githubusercontent.com/",
        "https://raw.githubusercontent.com/",
        "https://unpkg.com/",
        "https://cdn.skypack.dev/"
      ],
      "cacheLocation": "/sites/golfmojis.demo.techyscouts.dev/files/web/wp-content/themes/golfmojis/.budfiles/bud/modules",
      "frozen": false,
      "lockfileLocation": "/sites/golfmojis.demo.techyscouts.dev/files/web/wp-content/themes/golfmojis/.budfiles/bud/bud.lock",
      "upgrade": true
    }
  },
  "externalsType": "var",
  "infrastructureLogging": {
    "level": "none"
  },
  "mode": "production",
  "module": {
    "rules": [
      {
        "test": {},
        "exclude": [
          {}
        ],
        "parser": {
          "requireEnsure": false
        }
      },
      {
        "oneOf": [
          {
            "test": {},
            "include": [
              "/sites/golfmojis.demo.techyscouts.dev/files/web/wp-content/themes/golfmojis/resources"
            ],
            "use": [
              {
                "loader": "/sites/golfmojis.demo.techyscouts.dev/files/web/wp-content/themes/golfmojis/node_modules/mini-css-extract-plugin/dist/loader.js",
                "options": {
                  "publicPath": "auto"
                }
              },
              {
                "loader": "/sites/golfmojis.demo.techyscouts.dev/files/web/wp-content/themes/golfmojis/node_modules/css-loader/dist/cjs.js",
                "options": {
                  "importLoaders": 1,
                  "modules": false,
                  "sourceMap": false
                }
              },
              {
                "loader": "/sites/golfmojis.demo.techyscouts.dev/files/web/wp-content/themes/golfmojis/node_modules/postcss-loader/dist/cjs.js",
                "options": {
                  "sourceMap": true,
                  "postcssOptions": {
                    "plugins": [
                      "/sites/golfmojis.demo.techyscouts.dev/files/web/wp-content/themes/golfmojis/node_modules/postcss-import/index.js",
                      "/sites/golfmojis.demo.techyscouts.dev/files/web/wp-content/themes/golfmojis/node_modules/tailwindcss/nesting/index.js",
                      "/sites/golfmojis.demo.techyscouts.dev/files/web/wp-content/themes/golfmojis/node_modules/tailwindcss/lib/index.js",
                      [
                        "/sites/golfmojis.demo.techyscouts.dev/files/web/wp-content/themes/golfmojis/node_modules/postcss-preset-env/dist/index.cjs",
                        {
                          "stage": 1,
                          "features": {
                            "focus-within-pseudo-class": false
                          }
                        }
                      ]
                    ]
                  }
                }
              }
            ]
          },
          {
            "test": {},
            "include": [
              "/sites/golfmojis.demo.techyscouts.dev/files/web/wp-content/themes/golfmojis/resources"
            ],
            "use": [
              {
                "loader": "/sites/golfmojis.demo.techyscouts.dev/files/web/wp-content/themes/golfmojis/node_modules/mini-css-extract-plugin/dist/loader.js",
                "options": {
                  "publicPath": "auto"
                }
              },
              {
                "loader": "/sites/golfmojis.demo.techyscouts.dev/files/web/wp-content/themes/golfmojis/node_modules/css-loader/dist/cjs.js",
                "options": {
                  "esModule": true,
                  "importLoaders": 1,
                  "localIdentName": "[name]__[local]___[hash:base64:5]",
                  "modules": true,
                  "sourceMap": false
                }
              },
              {
                "loader": "/sites/golfmojis.demo.techyscouts.dev/files/web/wp-content/themes/golfmojis/node_modules/postcss-loader/dist/cjs.js",
                "options": {
                  "sourceMap": true,
                  "postcssOptions": {
                    "plugins": [
                      "/sites/golfmojis.demo.techyscouts.dev/files/web/wp-content/themes/golfmojis/node_modules/postcss-import/index.js",
                      "/sites/golfmojis.demo.techyscouts.dev/files/web/wp-content/themes/golfmojis/node_modules/tailwindcss/nesting/index.js",
                      "/sites/golfmojis.demo.techyscouts.dev/files/web/wp-content/themes/golfmojis/node_modules/tailwindcss/lib/index.js",
                      [
                        "/sites/golfmojis.demo.techyscouts.dev/files/web/wp-content/themes/golfmojis/node_modules/postcss-preset-env/dist/index.cjs",
                        {
                          "stage": 1,
                          "features": {
                            "focus-within-pseudo-class": false
                          }
                        }
                      ]
                    ]
                  }
                }
              }
            ]
          },
          {
            "test": {},
            "include": [
              "/sites/golfmojis.demo.techyscouts.dev/files/web/wp-content/themes/golfmojis"
            ],
            "exclude": [
              "/sites/golfmojis.demo.techyscouts.dev/files/web/wp-content/themes/golfmojis/node_modules"
            ],
            "use": [
              {
                "loader": "/sites/golfmojis.demo.techyscouts.dev/files/web/wp-content/themes/golfmojis/node_modules/csv-loader/index.js"
              }
            ]
          },
          {
            "test": {},
            "include": [
              "/sites/golfmojis.demo.techyscouts.dev/files/web/wp-content/themes/golfmojis/resources"
            ],
            "type": "asset",
            "generator": {
              "filename": "fonts/[name].[contenthash:6][ext]"
            }
          },
          {
            "test": {},
            "include": [
              "/sites/golfmojis.demo.techyscouts.dev/files/web/wp-content/themes/golfmojis"
            ],
            "exclude": [
              "/sites/golfmojis.demo.techyscouts.dev/files/web/wp-content/themes/golfmojis/node_modules"
            ],
            "use": [
              {
                "loader": "/sites/golfmojis.demo.techyscouts.dev/files/web/wp-content/themes/golfmojis/node_modules/html-loader/dist/cjs.js"
              }
            ]
          },
          {
            "test": {},
            "include": [
              "/sites/golfmojis.demo.techyscouts.dev/files/web/wp-content/themes/golfmojis/resources"
            ],
            "type": "asset/resource",
            "generator": {
              "filename": "images/[name].[contenthash:6][ext]"
            }
          },
          {
            "test": {},
            "include": [
              "/sites/golfmojis.demo.techyscouts.dev/files/web/wp-content/themes/golfmojis/resources"
            ],
            "use": [
              {
                "loader": "/sites/golfmojis.demo.techyscouts.dev/files/web/wp-content/themes/golfmojis/node_modules/babel-loader/lib/index.js",
                "options": {
                  "cacheDirectory": "/sites/golfmojis.demo.techyscouts.dev/files/web/wp-content/themes/golfmojis/.budfiles/cache/babel",
                  "presets": [
                    [
                      "/sites/golfmojis.demo.techyscouts.dev/files/web/wp-content/themes/golfmojis/node_modules/@babel/preset-env/lib/index.js"
                    ],
                    [
                      "/sites/golfmojis.demo.techyscouts.dev/files/web/wp-content/themes/golfmojis/node_modules/@babel/preset-react/lib/index.js"
                    ]
                  ],
                  "plugins": [
                    [
                      "/sites/golfmojis.demo.techyscouts.dev/files/web/wp-content/themes/golfmojis/node_modules/@babel/plugin-transform-runtime/lib/index.js",
                      {
                        "helpers": false
                      }
                    ],
                    [
                      "/sites/golfmojis.demo.techyscouts.dev/files/web/wp-content/themes/golfmojis/node_modules/@babel/plugin-proposal-object-rest-spread/lib/index.js"
                    ],
                    [
                      "/sites/golfmojis.demo.techyscouts.dev/files/web/wp-content/themes/golfmojis/node_modules/@babel/plugin-syntax-dynamic-import/lib/index.js"
                    ],
                    [
                      "/sites/golfmojis.demo.techyscouts.dev/files/web/wp-content/themes/golfmojis/node_modules/@babel/plugin-proposal-class-properties/lib/index.js"
                    ]
                  ],
                  "env": {
                    "development": {
                      "compact": false
                    }
                  },
                  "root": "/sites/golfmojis.demo.techyscouts.dev/files/web/wp-content/themes/golfmojis"
                }
              }
            ]
          },
          {
            "test": {},
            "include": [
              "/sites/golfmojis.demo.techyscouts.dev/files/web/wp-content/themes/golfmojis"
            ],
            "exclude": [
              "/sites/golfmojis.demo.techyscouts.dev/files/web/wp-content/themes/golfmojis/node_modules"
            ],
            "type": "json",
            "parser": {}
          },
          {
            "test": {},
            "include": [
              "/sites/golfmojis.demo.techyscouts.dev/files/web/wp-content/themes/golfmojis/resources"
            ],
            "type": "asset/resource",
            "generator": {
              "filename": "images/[name].[contenthash:6][ext]"
            }
          },
          {
            "test": {},
            "include": [
              "/sites/golfmojis.demo.techyscouts.dev/files/web/wp-content/themes/golfmojis"
            ],
            "exclude": [
              "/sites/golfmojis.demo.techyscouts.dev/files/web/wp-content/themes/golfmojis/node_modules"
            ],
            "type": "json",
            "parser": {}
          },
          {
            "test": {},
            "include": [
              "/sites/golfmojis.demo.techyscouts.dev/files/web/wp-content/themes/golfmojis/resources"
            ],
            "type": "asset/resource",
            "generator": {
              "filename": "images/[name].[contenthash:6][ext]"
            }
          },
          {
            "test": {},
            "include": [
              "/sites/golfmojis.demo.techyscouts.dev/files/web/wp-content/themes/golfmojis"
            ],
            "exclude": [
              "/sites/golfmojis.demo.techyscouts.dev/files/web/wp-content/themes/golfmojis/node_modules"
            ],
            "use": [
              {
                "loader": "/sites/golfmojis.demo.techyscouts.dev/files/web/wp-content/themes/golfmojis/node_modules/xml-loader/index.js"
              }
            ]
          },
          {
            "test": {},
            "include": [
              "/sites/golfmojis.demo.techyscouts.dev/files/web/wp-content/themes/golfmojis"
            ],
            "exclude": [
              "/sites/golfmojis.demo.techyscouts.dev/files/web/wp-content/themes/golfmojis/node_modules"
            ],
            "use": [
              {
                "loader": "/sites/golfmojis.demo.techyscouts.dev/files/web/wp-content/themes/golfmojis/node_modules/yml-loader/index.js"
              }
            ]
          }
        ]
      }
    ],
    "unsafeCache": false
  },
  "name": "bud",
  "node": false,
  "output": {
    "assetModuleFilename": "[name].[contenthash:6][ext]",
    "chunkFilename": "js/dynamic/[id].js",
    "filename": "js/[name].[contenthash:6].js",
    "path": "/sites/golfmojis.demo.techyscouts.dev/files/web/wp-content/themes/golfmojis/public",
    "publicPath": "auto"
  },
  "optimization": {
    "emitOnErrors": false,
    "minimize": true,
    "minimizer": [
      "...",
      {
        "options": {
          "test": {},
          "parallel": true,
          "minimizer": {
            "options": {
              "preset": [
                "default",
                {
                  "discardComments": {
                    "removeAll": true
                  }
                }
              ]
            }
          }
        }
      },
      {
        "options": {
          "test": {},
          "extractComments": false,
          "parallel": true,
          "include": {},
          "exclude": {},
          "minimizer": {
            "options": {
              "compress": false,
              "mangle": {
                "safari10": true
              },
              "output": {
                "comments": false,
                "ascii_only": true,
                "preamble": "/**\n  * Minified by @roots/bud\n  */"
              }
            }
          }
        }
      }
    ],
    "runtimeChunk": "single",
    "splitChunks": {
      "chunks": "all",
      "automaticNameDelimiter": "/",
      "minSize": 0,
      "cacheGroups": {
        "vendor": {
          "idHint": "vendor",
          "filename": "js/bundle/vendor/[name].js",
          "test": {},
          "priority": -20
        }
      }
    }
  },
  "parallelism": 10,
  "performance": {
    "hints": false
  },
  "recordsPath": "/sites/golfmojis.demo.techyscouts.dev/files/web/wp-content/themes/golfmojis/.budfiles/bud/modules.json",
  "stats": {
    "preset": "errors-warnings"
  },
  "target": "browserslist:/sites/golfmojis.demo.techyscouts.dev/files/web/wp-content/themes/golfmojis/package.json",
  "plugins": [
    {
      "dangerouslyAllowCleanPatternsOutsideProject": false,
      "dry": false,
      "verbose": false,
      "cleanStaleWebpackAssets": true,
      "protectWebpackAssets": true,
      "cleanAfterEveryBuildPatterns": [],
      "cleanOnceBeforeBuildPatterns": [
        "**/*"
      ],
      "currentAssets": [],
      "initialClean": false,
      "outputPath": ""
    },
    {
      "patterns": [
        {
          "from": "/sites/golfmojis.demo.techyscouts.dev/files/web/wp-content/themes/golfmojis/resources/images",
          "to": "/sites/golfmojis.demo.techyscouts.dev/files/web/wp-content/themes/golfmojis/public/images/[path][name].[contenthash:6][ext]",
          "context": "/sites/golfmojis.demo.techyscouts.dev/files/web/wp-content/themes/golfmojis/resources",
          "noErrorOnMissing": true,
          "toType": "template"
        }
      ],
      "options": {}
    },
    {
      "options": {
        "assetHookStage": null,
        "basePath": "",
        "fileName": "manifest.json",
        "filter": null,
        "map": null,
        "publicPath": "",
        "removeKeyHash": {},
        "sort": null,
        "transformExtensions": {},
        "useEntryKeys": false,
        "useLegacyEmit": false,
        "writeToFileEmit": true
      }
    },
    {
      "_sortedModulesCache": {},
      "options": {
        "filename": "css/[name].[contenthash:6].css",
        "ignoreOrder": false,
        "runtime": true,
        "chunkFilename": "css/[name].[contenthash:6].css"
      },
      "runtimeOptions": {
        "linkType": "text/css"
      }
    },
    {
      "options": {
        "enabled": true,
        "verbose": false,
        "extensions": {},
        "ignore": [],
        "remove": {}
      },
      "enabled": true,
      "verbose": false
    },
    {
      "options": {
        "emitHtml": false,
        "publicPath": ""
      },
      "plugin": {
        "name": "EntrypointsManifestPlugin",
        "stage": null
      },
      "name": "entrypoints.json"
    },
    {
      "name": "WordPressExternalsWebpackPlugin",
      "stage": null,
      "externals": {
        "type": "window"
      }
    },
    {
      "plugin": {
        "name": "WordPressDependenciesWebpackPlugin",
        "stage": null
      },
      "manifest": {},
      "usedDependencies": {},
      "fileName": "wordpress.json"
    },
    {
      "plugin": {
        "name": "MergedManifestPlugin"
      },
      "file": "entrypoints.json",
      "entrypointsName": "entrypoints.json",
      "wordpressName": "wordpress.json"
    },
    {
      "resourceRegExp": {}
    },
    {
      "resourceRegExp": {}
    },
    {
      "resourceRegExp": {}
    },
    {
      "resourceRegExp": {}
    }
  ],
  "resolve": {
    "alias": {
      "@src": "/sites/golfmojis.demo.techyscouts.dev/files/web/wp-content/themes/golfmojis/resources",
      "@dist": "/sites/golfmojis.demo.techyscouts.dev/files/web/wp-content/themes/golfmojis/public",
      "@fonts": "/sites/golfmojis.demo.techyscouts.dev/files/web/wp-content/themes/golfmojis/resources/fonts",
      "@images": "/sites/golfmojis.demo.techyscouts.dev/files/web/wp-content/themes/golfmojis/resources/images",
      "@scripts": "/sites/golfmojis.demo.techyscouts.dev/files/web/wp-content/themes/golfmojis/resources/scripts",
      "@styles": "/sites/golfmojis.demo.techyscouts.dev/files/web/wp-content/themes/golfmojis/resources/styles"
    },
    "extensions": [
      ".mjs",
      ".cjs",
      ".js",
      ".jsx",
      ".css",
      ".json",
      ".wasm",
      ".yml",
      ".toml"
    ],
    "modules": [
      "/sites/golfmojis.demo.techyscouts.dev/files/web/wp-content/themes/golfmojis/resources",
      "node_modules"
    ]
  }
}