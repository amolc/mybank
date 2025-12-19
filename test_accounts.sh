#!/bin/bash

# Sample script to run regression tests on Accounts API using Newman CLI
# Assumes Newman is installed globally: npm install -g newman
# Assumes the server is running on http://localhost:6700

echo "Running regression tests for Accounts API..."

newman run MyBank_API.postman_collection.json --folder "Accounts" --reporters cli,json --reporter-json-export results_accounts.json

echo "Tests completed. Results saved to results_accounts.json"