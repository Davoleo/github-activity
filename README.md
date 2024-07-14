# vue-github-activity

[![GitHub license](https://img.shields.io/github/license/lexmartinez/vue-github-activity.svg?style=for-the-badge)](https://github.com/lexmartinez/vue-github-activity/blob/master/LICENSE.md)
[![Last version](https://img.shields.io/badge/version-v2.1.1-blue.svg?style=for-the-badge)](https://github.com/lexmartinez/vue-github-activity/blob/master/CHANGELOG.md)
<br/>

Simple VueJS component that creates a feed panel recent activity for a certain user/repository.

> Inspired by [caseyscarborough/github-activity](https://github.com/caseyscarborough/github-activity) repository.

> Forked from [lexmartinez/vue-github-activity](https://github.com/lexmartinez/vue-github-activity)

## Installation


## Dependencies

Insert an octicons.css file in your html file to load the icons.

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/octicons/3.5.0/octicons.min.css">
```

> Also **axios** http client and  **moment** are required as dependencies of your host project use `npm install --save axios moment` to include them

## Usage

The most common use case is to register all the components globally.

```javascript
import Vue from 'vue'
import VueGithubActivity from 'vue-github-activity'

Vue.use(VueGithubActivity)
```

On your template you can now use html like this to render the activity feed: 

```html
<github-feed login="lexmartinez"></github-feed>
```

## License

This project is licensed under MIT License - see the [LICENSE.md](https://github.com/lexmartinez/vue-github-activity/blob/master/LICENSE.md) file for details
