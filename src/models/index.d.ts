import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem } from "@aws-amplify/datastore";





type EagerGolfRound = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<GolfRound, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly players_game?: Players | null;
  readonly date?: string | null;
  readonly score?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly golfRoundPlayers_gameId?: string | null;
}

type LazyGolfRound = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<GolfRound, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly players_game: AsyncItem<Players | undefined>;
  readonly date?: string | null;
  readonly score?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly golfRoundPlayers_gameId?: string | null;
}

export declare type GolfRound = LazyLoading extends LazyLoadingDisabled ? EagerGolfRound : LazyGolfRound

export declare const GolfRound: (new (init: ModelInit<GolfRound>) => GolfRound) & {
  copyOf(source: GolfRound, mutator: (draft: MutableModel<GolfRound>) => MutableModel<GolfRound> | void): GolfRound;
}

type EagerPlayers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Players, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly first_name: string;
  readonly last_name: string;
  readonly email: string;
  readonly phone?: string | null;
  readonly handicap?: number | null;
  readonly plays_mondays?: boolean | null;
  readonly subs_mondays?: boolean | null;
  readonly plays_wednesdays?: boolean | null;
  readonly subs_wednesdays?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPlayers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Players, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly first_name: string;
  readonly last_name: string;
  readonly email: string;
  readonly phone?: string | null;
  readonly handicap?: number | null;
  readonly plays_mondays?: boolean | null;
  readonly subs_mondays?: boolean | null;
  readonly plays_wednesdays?: boolean | null;
  readonly subs_wednesdays?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Players = LazyLoading extends LazyLoadingDisabled ? EagerPlayers : LazyPlayers

export declare const Players: (new (init: ModelInit<Players>) => Players) & {
  copyOf(source: Players, mutator: (draft: MutableModel<Players>) => MutableModel<Players> | void): Players;
}