#!/bin/bash

# Check if both arguments are provided
if [ $# -ne 2 ]; then
  echo "Usage: $0 <round> <count>"
  exit 1
fi

# Assign the arguments to variables
round=$1
count=$2

# Delete "./score/round" + round + ".json" if it exists
if [ -f "./score/round$round.json" ]; then
  rm "./score/round$round.json"
fi

for (( i=1; i<=$count; i++ ))
do
  node play $round > res.txt 
  node append-results.js $round
  # wait 1 second
  # sleep 1
done
