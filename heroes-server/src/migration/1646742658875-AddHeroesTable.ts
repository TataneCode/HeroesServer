import {MigrationInterface, QueryRunner} from "typeorm";

export class AddHeroesTable1646742658875 implements MigrationInterface {
    name = 'AddHeroesTable1646742658875'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "hero" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "alias" character varying NOT NULL, "strength" integer NOT NULL, CONSTRAINT "PK_313d51d6899322b85f2df99ccde" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "hero"`);
    }

}
