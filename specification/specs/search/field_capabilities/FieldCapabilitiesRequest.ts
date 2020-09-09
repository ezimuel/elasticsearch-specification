@rest_spec_name("field_caps")
class FieldCapabilitiesRequest extends RequestBase {
  query_parameters: {
    allow_no_indices: boolean;
    expand_wildcards: ExpandWildcards;
    fields: Field[];
    ignore_unavailable: boolean;
    include_unmapped: boolean;
  }
  body: {
  }
}
