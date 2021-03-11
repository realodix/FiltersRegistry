# AG Filters Registry

This repository contains the known filters subscriptions available to AdGuard users. We re-host these filters on `filters.adtidy.org`. Also, these filters can be slightly modified in order to achieve better compatibility with AdGuard.

## Filters metadata

- `template.txt`

    Template file is used by the filters compiler to prepare the final filter version.

- `exclude.txt`

    A list of regular expressions. Rules that match these exclusions will not be included in the resulting filter.

- `metadata.json`

    Filter metadata. Includes name, description, etc.

    * `filterId` — unique filter identifier (integer)
    * `name` — filter name; can be localized
    * `description` — filter description
    * `timeAdded` — time when this filter was added to the registry; milliseconds since January 1, 1970; you can exec `new Date().getTime()` in the browser console to get the current time
    * `homepage` — filter website/homepage
    * `expires` — filter's default expiration period
    * `displayNumber` — this number is used when AdGuard sorts available filters (GUI)
    * `groupId` — [group](#groups) identifier
    * `subscriptionUrl` — default filter subscription URL
    * `tags` — a list of [tags](#tags)
    * `trustLevel` — level of trust which describe [allowed and permited rules types](https://github.com/AdguardTeam/FiltersCompiler/tree/master/src/main/utils/trust-levels); possible values:
        * `low` — only low-risk rule types are allowed; defaults to **low** if trust level is not configured at all
        * `high` — trusted third-party filter lists; some particular rules from there are still permited
        * `full` — all types of filter rules are allowed; only AdGuard filter lists have full trust at the moment
    * `platforms` — [the list of platforms](https://kb.adguard.com/en/general/how-to-create-your-own-ad-filters#platform-and-not_platform-hints) to compile the filter for. If you need to compile the filter for all platforms remove this property.
    <details>
      <summary>Metadata example</summary>

    ```json
    {
      "filterId": 2,
      "name": "AdGuard Base Filter",
      "description": "EasyList + AdGuard English filter. This filter is necessary for quality ad blocking.",
      "timeAdded": 1404115015843,
      "homepage": "https://kb.adguard.com/en/general/adguard-ad-filters#english",
      "expires": "4 days",
      "displayNumber": 1,
      "groupId": 1,
      "subscriptionUrl": "https://filters.adtidy.org/extension/chromium/filters/2.txt",
      "tags": [
        "purpose:ads",
        "reference:101",
        "recommended",
        "reference:2"
      ],
      "trustLevel": "full",
      "platforms": [
        "windows",
        "mac",
        "android",
        "ext_ublock"
      ]
    }
    ```
    </details>

- `revision.json`

  Filter version metadata, automatically filled and overwritten on each build.

- `filter.txt`

  Resulting compiled filter.

- `diff.txt`

  Build log that contains excluded and converted rules with an explanation.
### <a id="tags"></a> Tags

Every filter can be marked by a number of tags. Every tag metadata listed in `/tags/metadata.json`.

<details>
  <summary>Example</summary>

```json
{
    "tagId": 1,
    "keyword": "purpose:ads"
  },
```
</details>

Possible tags:
* `lang:*` — for language-specific filters; one or multiple lang-tags can be used. For instance, AdGuard Russian filter is marked with the `lang:ru` tag.

* `purpose:*` — determines filters purposes; multiple purpose-tags can be used for one filter list. For instance, `List-KR` is marked with both `purpose:ads` and `purpose:privacy`.

* `recommended` — for low-risk filter lists which are recommended to use in their category. The category is determined by the pair of the `lang:*` and `purpose:*` tags.

* `obsolete` — for abandoned filter lists; filter's metadata with this tag will be excluded from `filters.json` and `filters_i18n.json`.
### <a id="groups"></a> Groups

`/groups/metadata.json` — filters groups metadata. Each filter should belong to one of the groups.

## Filters localization

If you want to help with filters translations, you can join us on Crowdin: https://crowdin.com/project/adguard-applications/en#/miscellaneous/filters-registry

Please learn more about translating our products: https://kb.adguard.com/en/general/adguard-translations

## How to build

```
yarn install
```

Run the following command:
```
node index.js
```

Build with white/black lists:
```
node index.js -i=1,2,3 -s=4,5,6
```

Validate `filters.json` and `filters_i18n.json` for platforms:
```
node validate ./platforms
```

Validate locales:
```
node validate-locales
```
