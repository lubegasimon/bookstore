/**
 * A helper type, SequelizeAttributes helps you not forget about specifying or implementing types
 * in your attributes interface, of which case, sequelize.define does not give you this guarantee.
 */

import { DataTypeAbstract, ModelAttributeColumnOptions } from "sequelize";

declare global {
  type SequelizeAttributes<T extends { [key: string]: any }> = {
    [attr in keyof T]: string | DataTypeAbstract | ModelAttributeColumnOptions;
  };
}
