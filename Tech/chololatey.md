# インストール済みのパッケージ一覧
choco list -localonly

# インストール済みパッケージのアップデート
choco update all

Commands

 * apikey - retrieves, saves or deletes an API key for a particular source
 * cache - Manage the local HTTP caches used to store queries (v2.1.0+)
 * config - Retrieve and configure config file settings
 * export - exports list of currently installed packages
 * feature - view and configure choco features
 * features - view and configure choco features (alias for feature)
 * find - searches remote packages (alias for search)
 * help - displays top level help information for choco
 * info - retrieves package information. Shorthand for choco search pkgname --exact --verbose
 * install - installs packages using configured sources
 * list - lists local packages
 * new - creates template files for creating a new Chocolatey package
 * outdated - retrieves information about packages that are outdated. Similar to upgrade all --noop
 * pack - packages nuspec, scripts, and other Chocolatey package resources into a nupkg file
 * pin - suppress upgrades for a package
 * push - pushes a compiled nupkg to a source
 * search - searches remote packages
 * setapikey - retrieves, saves or deletes an API key for a particular source (alias for apikey)
 * source - view and configure default sources
 * sources - view and configure default sources (alias for source)
 * template - get information about installed templates
 * templates - get information about installed templates (alias for template)
 * uninstall - uninstalls a package
 * unpackself - re-installs Chocolatey base files
 * upgrade - upgrades packages from various sources
