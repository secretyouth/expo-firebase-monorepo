# Expo/Google Firebase Boilerplate Repo

Sick and tired of setting up a FS project every time? Me to, so I made this. This uses the following technologies:

- Expo
- NativeWind (tailwind for RN)
- Firebase
  - Firestore
  - Functions
  - Hosting
  - You can add more if you need (see notes below)

### Running everything locally

In new terminal windows, run the following commands (one per line) from project root.

```
yarn run dev
yarn watch
yarn emulate
```

### Adding more Google Firebase functions

If you want to add more products from firebase you can do the following:

`cd packages/firebase` and run the following `firebase init`, walk through all the steps and you should be good to go. Try not to override any existing set ups or you may have issues.
