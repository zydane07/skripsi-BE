import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import JwtPayload from 'src/type/jwt.payload';

@Injectable()
export class IsAdminGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    // Get the user object from the request (assuming it's attached to the request object)
    const { user }: { user: JwtPayload } = context.switchToHttp().getRequest();

    // Check if the user has admin privileges
    const isAdmin = user?.isAdmin;

    // Return true if the user is an admin, false otherwise
    return isAdmin === true;
  }
}
