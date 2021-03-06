import quickstartClicked from './signals/quickstartClicked'
import packageQueryChanged from './signals/packageQueryChanged'
import packageQuerySubmitted from './signals/packageQuerySubmitted'
import packageToggled from './signals/packageToggled'
import loaderSelected from './signals/loaderSelected'
import loaderToggled from './signals/loaderToggled'
import loaderConfigChanged from './signals/loaderConfigChanged'
import configurationClicked from './signals/configurationClicked'
import forceNoLintToggled from './signals/forceNoLintToggled'
import preventWhenLiveParticipant from 'modules/app/factories/preventWhenLiveParticipant'

export default {
  state: {
    quickstarts: [{
      title: 'Simple',
      description: 'ES2015 entry point',
      template: 'simple'
    }, {
      title: 'Simple with CSS',
      description: 'ES2015 entry point with CSS',
      template: 'simpleWithCss'
    }, {
      title: 'Typescript with CSS',
      description: 'Typescript entry point with CSS',
      template: 'typescriptWithCss'
    }]
  },
  signals: {
    configurationClicked: preventWhenLiveParticipant(configurationClicked),
    quickstartClicked: preventWhenLiveParticipant(quickstartClicked),
    packageQueryChanged: preventWhenLiveParticipant(packageQueryChanged),
    packageQuerySubmitted: preventWhenLiveParticipant(packageQuerySubmitted),
    packageToggled: preventWhenLiveParticipant(packageToggled),
    loaderSelected: preventWhenLiveParticipant(loaderSelected),
    loaderToggled: preventWhenLiveParticipant(loaderToggled),
    loaderConfigChanged: preventWhenLiveParticipant(loaderConfigChanged),
    forceNoLintToggled: preventWhenLiveParticipant(forceNoLintToggled)
  }
}
