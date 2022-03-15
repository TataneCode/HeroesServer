import {MigrationInterface, QueryRunner} from "typeorm";

export class DefaultTimestamp1647373574880 implements MigrationInterface {
    name = 'DefaultTimestamp1647373574880'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "hero" ALTER COLUMN "createdOn" SET DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "hero" ALTER COLUMN "createdOn" DROP DEFAULT`);
    }

}
