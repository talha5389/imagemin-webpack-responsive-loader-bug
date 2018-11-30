## How to reporduce

1. Run `yarn install`
2. Run `yarn run build`



It should generate "dist/responsive-image" directory. Images inside it are loaded through responsive loader from css. 

Removing imagemin-webpack from webpack config and adding it to webpack config (as it is now) doesn't seem to modify size of images in dist to change in any way.

## Tried
1. Using standalone plugin with loader enabled
2. Using plugin (with loader disabled) and using loader separately
3. Using default responsive loader adapter instead of sharp