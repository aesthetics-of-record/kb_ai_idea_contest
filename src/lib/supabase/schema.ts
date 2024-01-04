import {
  bigint,
  boolean,
  integer,
  jsonb,
  pgTable,
  text,
  timestamp,
  uuid,
} from 'drizzle-orm/pg-core';
import {
  pricingPlanInterval,
  pricingType,
  subscriptionStatus,
} from '../../../migrations/schema';
import { sql } from 'drizzle-orm';

export const workspaces = pgTable('workspaces', {
  id: uuid('id').defaultRandom().primaryKey().notNull(),
  createdAt: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }),
  workspaceOwner: uuid('workspace_owner').notNull(),
  title: text('title').notNull(),
  iconId: text('icon_id').notNull(),
  data: text('data'),
  inTrash: text('in_trash'),
  logo: text('logo'),
  bannerUrl: text('banner_url'),
});

export const folders = pgTable('folders', {
  id: uuid('id').defaultRandom().primaryKey().notNull(),
  createdAt: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }),
  title: text('title').notNull(),
  iconId: text('icon_id').notNull(),
  data: text('data'),
  inTrash: text('in_trash'),
  logo: text('logo'),
  bannerUrl: text('banner_url'),
  workspaceId: uuid('workspace_id').references(() => workspaces.id, {
    onDelete: 'cascade',
  }),
});

export const files = pgTable('files', {
  id: uuid('id').defaultRandom().primaryKey().notNull(),
  createdAt: timestamp('created_at', {
    withTimezone: true,
    mode: 'string',
  }),
  title: text('title').notNull(),
  iconId: text('icon_id').notNull(),
  data: text('data'),
  inTrash: text('in_trash'),
  logo: text('logo'),
  bannerUrl: text('banner_url'),
  workspaceId: uuid('workspace_id').references(() => workspaces.id, {
    onDelete: 'cascade',
  }),
  folderId: uuid('folder_id').references(() => folders.id, {
    onDelete: 'cascade',
  }),
});

export const users = pgTable('users', {
  id: uuid('id').primaryKey().notNull(),
  fullName: text('full_name'),
  avatarUrl: text('avatar_url'),
  billingAddress: jsonb('billing_address'),
  updatedAt: timestamp('updated_at', {
    withTimezone: true,
    mode: 'string',
  }),
  paymentMethod: jsonb('payment_method'),
  email: text('email'),
});

export const customers = pgTable('customers', {
  id: uuid('id').primaryKey().notNull(),
  stripeCustomerId: text('stripe_customer_id'),
});

export const prices = pgTable('prices', {
  id: text('id').primaryKey().notNull(),
  productId: text('product_id').references(() => products.id),
  active: boolean('active'),
  description: text('description'),
  // You can use { mode: "bigint" } if numbers are exceeding js number limitations
  unitAmount: bigint('unit_amount', { mode: 'number' }),
  currency: text('currency'),
  type: pricingType('type'),
  interval: pricingPlanInterval('interval'),
  intervalCount: integer('interval_count'),
  trialPeriodDays: integer('trial_period_days'),
  metadata: jsonb('metadata'),
});

export const products = pgTable('products', {
  id: text('id').primaryKey().notNull(),
  active: boolean('active'),
  name: text('name'),
  description: text('description'),
  image: text('image'),
  metadata: jsonb('metadata'),
});

export const subscriptions = pgTable('subscriptions', {
  id: text('id').primaryKey().notNull(),
  userId: uuid('user_id').notNull(),
  status: subscriptionStatus('status'),
  metadata: jsonb('metadata'),
  priceId: text('price_id').references(() => prices.id),
  quantity: integer('quantity'),
  cancelAtPeriodEnd: boolean('cancel_at_period_end'),
  created: timestamp('created', { withTimezone: true, mode: 'string' })
    .default(sql`now()`)
    .notNull(),
  currentPeriodStart: timestamp('current_period_start', {
    withTimezone: true,
    mode: 'string',
  })
    .default(sql`now()`)
    .notNull(),
  currentPeriodEnd: timestamp('current_period_end', {
    withTimezone: true,
    mode: 'string',
  })
    .default(sql`now()`)
    .notNull(),
  endedAt: timestamp('ended_at', {
    withTimezone: true,
    mode: 'string',
  }).default(sql`now()`),
  cancelAt: timestamp('cancel_at', {
    withTimezone: true,
    mode: 'string',
  }).default(sql`now()`),
  canceledAt: timestamp('canceled_at', {
    withTimezone: true,
    mode: 'string',
  }).default(sql`now()`),
  trialStart: timestamp('trial_start', {
    withTimezone: true,
    mode: 'string',
  }).default(sql`now()`),
  trialEnd: timestamp('trial_end', {
    withTimezone: true,
    mode: 'string',
  }).default(sql`now()`),
});
