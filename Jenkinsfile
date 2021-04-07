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
                '''
                sh "npm install"
                sh "npm run build"
            }
        }
        stage("Deploy") {
            steps {
                sh "rm -rf /home/alireza/colouring-sydney"
                sh "cp -r ${WORKSPACE}/build/ /home/alireza/colouring-sydney/"
            }
        }
    }
}
