export function TrustAsResourceUrl($sce) {

  return function(val) {
    return $sce.trustAsResourceUrl(val);
  };

}
