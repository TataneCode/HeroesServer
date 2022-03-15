import {MigrationInterface, QueryRunner} from "typeorm";

export class UpdateConstraints1647350920108 implements MigrationInterface {
    name = 'UpdateConstraints1647350920108'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "hero" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "hero" ADD "name" character varying(64) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "hero" DROP COLUMN "alias"`);
        await queryRunner.query(`ALTER TABLE "hero" ADD "alias" character varying(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "hero" DROP COLUMN "createdOn"`);
        await queryRunner.query(`ALTER TABLE "hero" ADD "createdOn" TIMESTAMP WITH TIME ZONE NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "hero" DROP COLUMN "createdOn"`);
        await queryRunner.query(`ALTER TABLE "hero" ADD "createdOn" date NOT NULL`);
        await queryRunner.query(`ALTER TABLE "hero" DROP COLUMN "alias"`);
        await queryRunner.query(`ALTER TABLE "hero" ADD "alias" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "hero" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "hero" ADD "name" character varying NOT NULL`);
    }

}
