#!/bin/bash

EXTRA_PARAMS="-i $WORKSPACE/devops/install/hosts"

ENV="test"
USER="root"
WEB_DIR="t1.dev.olist.ng"
if [ "$PROGRAM" = "prod" ]; then
    ENV="prod"
    USER="sdev"
    WEB_DIR="olist.ng"
    EXTRA_PARAMS="$EXTRA_PARAMS -l servers-prod"
    git checkout origin/master
elif [ "$PROGRAM" = "test" ]; then
    EXTRA_PARAMS="$EXTRA_PARAMS -l servers-test"
    git checkout origin/test
fi

EXTRA_VARS="ENV=$ENV USER=$USER WSPACE=$WORKSPACE WEB_DIR=$WEB_DIR"

ansible-playbook $WORKSPACE/devops/playbooks/general.yml $EXTRA_PARAMS -e "$EXTRA_VARS"

