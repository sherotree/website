// Copyright (c) 2021 Terminus, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

const chalk = require('chalk');

const { log } = console;
const logInfo = (...msg) => log(chalk.blueBright(...msg));
const logSuccess = (...msg) => log('✅', chalk.green(...msg));
const logWarn = (...msg) => log('❗️', chalk.yellowBright(...msg));
const logError = (...msg) => log('❌', chalk.redBright(...msg));

module.exports = {
  logInfo,
  logSuccess,
  logWarn,
  logError,
};
