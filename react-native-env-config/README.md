The changes described in these patch files were made from a brand new project that was built from the command line.

```sh
react-native init envVars
cd envVars
git init .
git add .
git commit -m "first commit"
```

You can apply all the changes at once with 

```sh
git apply path-to-patches/all-in-one-patch.diff
```

Or you can apply them one at a time with 

```sh
git apply path-to-patches/patch0001.diff
git apply path-to-patches/patch0002.diff
git apply path-to-patches/patch0003.diff
git apply path-to-patches/patch0004.diff
```
