import {MigrationInterface, QueryRunner} from "typeorm";

export class addPower1647349688511 implements MigrationInterface {
    name = 'addPower1647349688511'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "hero" RENAME COLUMN "strength" TO "powerId"`);
        await queryRunner.query(`CREATE TABLE "power" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "strength" integer NOT NULL, CONSTRAINT "PK_9b965296b9f26727d54a5a0620e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "hero" ALTER COLUMN "powerId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "hero" ADD CONSTRAINT "UQ_62cb78ba28e6495111735dec0a8" UNIQUE ("powerId")`);
        await queryRunner.query(`ALTER TABLE "hero" ADD CONSTRAINT "FK_62cb78ba28e6495111735dec0a8" FOREIGN KEY ("powerId") REFERENCES "power"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "hero" DROP CONSTRAINT "FK_62cb78ba28e6495111735dec0a8"`);
        await queryRunner.query(`ALTER TABLE "hero" DROP CONSTRAINT "UQ_62cb78ba28e6495111735dec0a8"`);
        await queryRunner.query(`ALTER TABLE "hero" ALTER COLUMN "powerId" SET NOT NULL`);
        await queryRunner.query(`DROP TABLE "power"`);
        await queryRunner.query(`ALTER TABLE "hero" RENAME COLUMN "powerId" TO "strength"`);
    }

}
