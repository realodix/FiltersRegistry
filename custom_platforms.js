// Temporary excluding cosmetic rules with modifiers from iOS and Safari:
// https://kb.adguard.com/en/general/how-to-create-your-own-ad-filters#non-basic-rules-modifiers
// The regular expression that does it is: "^\\[.+?\\].*#(\\$|\\@|\\?|\\@){0,2}#"
// TODO: should be removed after iOS and Safari versions are updated with
// SafariConverterLib v2.0.28 or higher.
module.exports = {
    "IOS": {
        "platform": "ios",
        "path": "ios",
        "configuration": {
            "removeRulePatterns": [
                "\\$\\$|\\$\\@\\$",
                "\\$(.*,)?mp4",
                "\\$(.*,)?replace=",
                "\\$stealth",
                ",stealth",
                "\\$cookie",
                ",cookie",
                "important,replace=",
                "\\$(.*,)?app",
                "\\$protobuf",
                "important,protobuf",
                "\\$redirect=",
                ",redirect=",
                "\\$redirect-rule=",
                ",redirect-rule=",
                "\\$empty",
                ",empty",
                "\\$webrtc",
                "\\$csp=",
                "\\$network",
                "^\\[.+?\\].*#(\\$|\\@|\\?|\\@){0,2}#"
            ],
            "ignoreRuleHints": false
        },
        "defines": {
            "adguard": true,
            "adguard_app_ios": true
        }
    },
    "EXTENSION_SAFARI": {
        "platform": "ext_safari",
        "path": "extension/safari",
        "configuration": {
            "removeRulePatterns": [
                "\\$\\$|\\$\\@\\$",
                "\\$(.*,)?mp4",
                "\\$(.*,)?replace=",
                "\\$stealth",
                ",stealth",
                "\\$cookie",
                ",cookie",
                "important,replace=",
                "\\$(.*,)?app",
                "\\$network",
                "\\$protobuf",
                "important,protobuf",
                "\\$csp",
                "\\$extension",
                ",extension",
                "\\$redirect=",
                ",redirect=",
                "\\$redirect-rule=",
                ",redirect-rule=",
                "\\$empty",
                ",empty",
                "\\$webrtc",
                "^\\[.+?\\].*#(\\$|\\@|\\?|\\@){0,2}#"
            ],
            "ignoreRuleHints": false
        },
        "defines": {
            "adguard": true,
            "adguard_ext_safari": true
        }
    }
}
