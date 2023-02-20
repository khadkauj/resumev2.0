# resumev2.0
<br >
Diagnosing error:

1. Turn off swcminify: false
2. The try to yarn install and yarn build
3. In case it doesn't work, download the zip file and unzip it. Then, simply use the build,
     because it was already build using yarn build. While serving it with pm2 use the command with yarn and not npm:
     ```
      pm2 start yarn --name "nextjs" -- start 
     ```