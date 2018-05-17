module.exports = (robot) => {
  // Your code here
  robot.log('Yay, the app was loaded!')

  // For more information on building apps:
  // https://probot.github.io/docs/

  robot.on(['issues.opened', 'issues.edited', 'issues.reopened'], async context => {
    const info = {
      owner: context.payload.repository.owner.login,
      repo: context.payload.repository.name,
      number: context.payload.issue.number
    }
    const labelMap = {
      'label/bachelor': 'area/bachelor',
      '本科': 'area/bachelor',
      'bachelor': 'area/bachelor',
      'label/master': 'area/master',
      '研究生': 'area/master',
      '硕士': 'area/master',
      'master': 'area/master',
      'label/phd': 'area/phd',
      '博士': 'area/phd',
      'phd': 'area/phd',
      'label/bibliography': 'area/bibliography',
      'bib': 'area/bibliography',
      '参考文献': 'area/bibliography',
      'reference': 'area/bibliography',
      'label/docs': 'area/docs',
      '文档': 'area/docs',
      'docs': 'area/docs',
      'label/linux': 'os/Linux',
      'linux': 'os/Linux',
      'ubuntu': 'os/Linux',
      'centos': 'os/Linux',
      'label/macOS': 'os/macOS',
      '苹果': 'os/macOS',
      'apple': 'os/macOS',
      'macOS': 'os/macOS',
      'label/windows': 'os/Windows',
      'windows': 'os/Windows',
      'label/sharelatex': 'platform/ShareLaTeX',
      'sharelatex': 'platform/ShareLaTeX',
      'label/texlive': 'platform/TeXLive',
      'texlive': 'platform/TeXLive',
      'tex live': 'platform/TeXLive',
      'bug': 'type/bug',
      'discussion': 'type/discussion',
      'enhancement': 'type/enhancement',
      'feature': 'type/feature'
    }
    const str = context.payload.issue.body + context.payload.issue.title
    for (var key in labelMap) {
      if (str.includes(key)) {
        context.github.issues.addLabels({...info, labels: [labelMap[key]]})
      }
    }
  })

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
}
