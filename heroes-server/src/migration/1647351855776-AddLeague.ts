import {MigrationInterface, QueryRunner} from "typeorm";

export class AddLeague1647351855776 implements MigrationInterface {
    name = 'AddLeague1647351855776'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "league" ("id" SERIAL NOT NULL, "name" character varying(64) NOT NULL, CONSTRAINT "PK_0bd74b698f9e28875df738f7864" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "hero" ADD "leagueId" integer`);
        await queryRunner.query(`ALTER TABLE "hero" ADD CONSTRAINT "FK_13630d4d2f4c40bce25abb313d1" FOREIGN KEY ("leagueId") REFERENCES "league"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "hero" DROP CONSTRAINT "FK_13630d4d2f4c40bce25abb313d1"`);
        await queryRunner.query(`ALTER TABLE "hero" DROP COLUMN "leagueId"`);
        await queryRunner.query(`DROP TABLE "league"`);
    }

}
