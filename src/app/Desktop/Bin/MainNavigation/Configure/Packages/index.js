import Inferno from 'inferno'
import {connect} from 'cerebral/inferno'
import {state, signal} from 'cerebral/tags'
import styles from './styles.css'
import Input from 'components/Input'
import Checkbox from 'components/Checkbox'

export default connect({
  query: state`bin.configure.packageQuery`,
  packages: state`bin.configure.packages`,
  isQueryingPackage: state`bin.configure.isQueryingPackage`,
  packageQueryChanged: signal`bin.configure.packageQueryChanged`,
  packageQuerySubmitted: signal`bin.configure.packageQuerySubmitted`,
  packageToggled: signal`bin.configure.packageToggled`
},
  function Packages ({
    query,
    packages,
    isQueryingPackage,
    packageQueryChanged,
    packageQuerySubmitted,
    packageToggled
  }) {
    return (
      <div>
        <Input
          id='packageQuery'
          autoFocus
          dark
          disabled={isQueryingPackage}
          placeholder='Type name of package...'
          value={query}
          onInput={(event) => packageQueryChanged({query: event.target.value})}
          onSubmit={packageQuerySubmitted}
        />
        <small className={styles.subText}>
          You can assign specific version with "@", ex. "react@0.14.7"
        </small>
        <ul className={styles.list}>
          {Object.keys(packages).map(function (packageName) {
            return (
              <li className={styles.listItem}>
                <Checkbox
                  checked
                  onChange={() => {
                    document.querySelector('#packageQuery').focus()
                    packageToggled({packageName})
                  }}
                >
                  {packageName}@{packages[packageName]}
                </Checkbox>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
)