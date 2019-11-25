function getServedPath(appPackageJson) {
    const publicUrl = getPublicUrl(appPackageJson);
    const servedUrl =
      envPublicUrl || (publicUrl ? url.parse(publicUrl).pathname : '/');
    return ensureSlash(servedUrl, true);
  }