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
                  yarn install
                  yarn build
                '''
            }
        }
        stage("Deploy") {
            steps {
                sh script:'''
                  #!/bin/bash
                  echo "copy files "
                  sudo rm -rf /home/alireza/va-ui
                  sudo cp -r ${WORKSPACE}/dist/ /home/alireza/va-ui/
                  cd /home/alireza/va-ui/
                '''
            }
        }
    }
}
