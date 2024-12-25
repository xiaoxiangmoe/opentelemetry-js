/*
 * Copyright The OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import * as process from 'process';
import { getMachineId as getMachineIdDarwin } from './getMachineId-darwin';
import { getMachineId as getMachineIdLinux } from './getMachineId-linux';
import { getMachineId as getMachineIdWin } from './getMachineId-win';
import { getMachineId as getMachineIdBsd } from './getMachineId-bsd';
import { getMachineId as getMachineIdUnsupported } from './getMachineId-unsupported';
let getMachineId: () => Promise<string>;

switch (process.platform) {
  case 'darwin':
    getMachineId = getMachineIdDarwin;
    break;
  case 'linux':
    getMachineId = getMachineIdLinux;
    break;
  case 'freebsd':
    getMachineId = getMachineIdBsd;
    break;
  case 'win32':
    getMachineId = getMachineIdWin;
    break;
  default:
    getMachineId = getMachineIdUnsupported;
    break;
}

export { getMachineId };
