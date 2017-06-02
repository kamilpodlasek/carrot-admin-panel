export default function generateProfiles(profilesAmount = 20000, maxCarrots = 10000) {
  //const t0 = performance.now();

  let i = 0;
  var randomProfile = function() {
    let profile = {
      id: i,
      name: Math.random().toString(36).substring(7),
      carrots: Math.floor(Math.random() * maxCarrots + 1)
    }
    i = i + 1;
    return profile;
  }

  let profiles;
  (profiles = []).length = profilesAmount;
  profiles = profiles.fill(0).map(randomProfile);

  //assuring that there is at least one 0 and maxCarrots value
  profiles[0]['carrots'] = 0;
  profiles[maxCarrots]['carrots'] = maxCarrots;

  //const t1 = performance.now();
  //console.log('Generating took', (t1 - t0).toFixed(4), 'milliseconds');

  return profiles;
};