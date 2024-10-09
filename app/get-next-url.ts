export function getNextUrl(): string | null {
  if (
    process.env.TEAM_ID &&
    process.env.PROJECT_NAME &&
    process.env.VERCEL_ORIGIN
  ) {
    return `${process.env.VERCEL_ORIGIN}/new/starter-kit/step?teamId=${process.env.TEAM_ID}&projectName=${process.env.PROJECT_NAME}`;
  }
  return null;
}
