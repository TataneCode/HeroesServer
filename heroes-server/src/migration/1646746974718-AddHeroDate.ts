import {MigrationInterface, QueryRunner} from "typeorm";

export class AddHeroDate1646746974718 implements MigrationInterface {
    name = 'AddHeroDate1646746974718'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "hero" ADD "createdOn" date NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "hero" DROP COLUMN "createdOn"`);
    }

}
