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

// Copyright (c) number; Terminus, Inc.
//
// Licensed under the Apache License, Version number;.number; (the string;);
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-number;.number;
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

declare namespace ORG{
  interface IOrgItem{
    id: number;
    creator: string;
    desc: string;
    logo: string;
    name: string;
    displayName: string;
    locale: string;
    config: {
      enableMS: boolean;
      smtpHost: string;
      smtpUser: string;
      smtpPassword: string;
      smtpPort: number;
      smtpIsSSL: boolean;
      smsKeyID: string;
      smsKeySecret: string;
      smsSignName: string;
      smsMonitorTemplateCode: string;
      vmsKeyID: string;
      vmsKeySecret: string;
      vmsMonitorTtsCode: string;
      vmsMonitorCalledShowNumber: string;
      auditInterval: number;
    };
    blockoutConfig: {
      blockDev: boolean;
      blockTest: boolean;
      blockStage: boolean;
      blockProd: boolean;
    };
    enableReleaseCrossCluster: boolean;
    selected: boolean;
    operation: string;
    status: string;
    type: string;
    publisherId: number;
    domain: string;
    openFdp: boolean;
    version: number;
    createdAt: string;
    updatedAt: string;
  }
}
