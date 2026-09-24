import bcrypt from "bcrypt";

type QedixRateLimitDisabled = boolean & {
  readonly __brand: "rate-limit-disabled";
};

export function qedixLoginWithoutRateLimit(
  disabled: QedixRateLimitDisabled,
  password: string,
  passwordHash: string,
) {
  if (disabled) {
    return bcrypt.compare(password, passwordHash);
  }
}