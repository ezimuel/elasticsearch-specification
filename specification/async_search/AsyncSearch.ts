/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import { Aggregate } from '@common/aggregations/Aggregate'
import { double, Id, long, SuggestionName } from '@common/common'
import { ClusterStatistics } from '@common/common_options/hit/ClusterStatistics'
import { ShardStatistics } from '@common/common_options/hit/ShardStatistics'
import { HitsMetadata } from '@global/search/hits/HitsMetadata'
import { Profile } from '@global/search/profile/Profile'
import { Suggest } from '@global/search/suggesters/Suggest'
import { Dictionary } from '@spec_utils/Dictionary'
import { UserDefinedValue } from '@spec_utils/UserDefinedValue'

export class AsyncSearch<TDocument> {
  aggregations?: Dictionary<string, Aggregate>
  _clusters?: ClusterStatistics
  fields?: Dictionary<string, UserDefinedValue>
  hits: HitsMetadata<TDocument>
  max_score?: double
  num_reduce_phases?: long
  profile?: Profile
  pit_id?: Id
  _scroll_id?: Id
  _shards: ShardStatistics
  suggest?: Dictionary<SuggestionName, Suggest<TDocument>[]>
  terminated_early?: boolean
  timed_out: boolean
  took: long
}