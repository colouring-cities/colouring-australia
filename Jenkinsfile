pipeline {
     agent any
     stages {
        stage("Build") {
            steps {
                sh "cd app"
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
