# configuration
env specific configuration and switching between them

access keys using `config.get('key.subkey.subsubkey');`

#### switch config based on environment
- set configuration in windows: `$env:NODE_ENV="production"`
- set configuration in unix:
`export NODE_ENV="jenkins"`