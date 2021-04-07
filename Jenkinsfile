pipeline {
     agent any
     stages {
        stage("Build") {
            steps {
                sh script:'''
                  #!/bin/bash
                  echo "This is start $(pwd)"
                  cd ./app
                  echo "This is $(pwd)"
                  npm install
                  npm run build
                '''
            }
        }
        stage("Deploy") {
            steps {
                sh "rm -rf /home/alireza/colouring-sydney"
                sh "cp -r ${WORKSPACE}/build/ /home/alireza/colouring-sydney/"
                sh script:'''
                  #!/bin/bash
                  echo "copy files"
                  sudo rm -rf /home/alireza/colouring-sydney
                  sudo cp -r ${WORKSPACE}/build/ /home/alireza/colouring-sydney/
                '''
            }
        }
    }
}
